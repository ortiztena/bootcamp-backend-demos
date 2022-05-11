import { HotelRepository } from "./hotel.repository";

import { hotelContext } from "../hotel.context";
import { Hotel, Review } from "../hotel.model";

export const dbRepository: HotelRepository = {
    getHotelList: async () => await hotelContext.find().lean(),
    getHotel: async (id: string) =>
        await hotelContext.findOne({ _id: id }).lean(),
    updateReview: async (id: string, review: Review) => {
        const hotel = await hotelContext.findOne({ _id: id });
        if (hotel.reviews.find((r) => r._id === review._id)) {
            review._id = (Number(review._id) + hotel.reviews.length).toString();
        }
        return await hotelContext.findOneAndUpdate({
            _id: id,
        },
            { $push: { reviews: review } }).lean();
    },

};
