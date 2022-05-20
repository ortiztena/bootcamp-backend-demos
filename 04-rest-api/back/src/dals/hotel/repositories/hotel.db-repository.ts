import { getDBInstance } from "core/servers";
import { HotelRepository } from "./hotel.repository";
import { Hotel, Review } from "../hotel.model";
import { v4 as uuidv4 } from 'uuid';


export const dbRepository: HotelRepository = {
    getHotelList: async () => {
        const db = getDBInstance();
        return await db.collection<Hotel>("listingsAndReviews").find().toArray();
    },
    getHotel: async (id: string) => {
        const db = getDBInstance();
        return await db.collection<Hotel>("listingsAndReviews").findOne({
            _id: id,
        });
    },
    saveReview: async (id: string, review: Review) => {
        const db = getDBInstance();
        const hotel = await db.collection<Hotel>("listingsAndReviews").findOne({ _id: id });
        if (hotel.reviews.find((r) => r._id === review._id)) {
            review._id = uuidv4(review._id);
        }
        await db.collection<Hotel>("listingsAndReviews").findOneAndUpdate({
            _id: id,
        },
            { $push: { reviews: review } })
        return true;
    },
}
