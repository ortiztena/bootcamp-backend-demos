import { disconnect } from 'mongoose';
import { envConstants } from 'core/constants';
import { connectToDBServer } from 'core/servers';
import { hotelContext } from 'dals/hotel/hotel.context';

const runQueries = async () => {
    const result = await hotelContext
        .findOneAndUpdate(
            {
                _id: { $eq: '10006546' },
            },
            {
                $pull: {
                    reviews: {
                        _id: { $eq: '403055315' },
                    },
                },
            },
            {
                new: true,
                projection: { _id: 1, name: 1, reviews: 1 },
            }
        )
        .lean();
};

export const run = async () => {
    await connectToDBServer(envConstants.MONGODB_URI);
    await runQueries();
    await disconnect();
};