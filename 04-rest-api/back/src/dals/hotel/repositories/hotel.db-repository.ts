import { HotelRepository } from "./hotel.repository";
import { ObjectId } from "mongodb";
import { hotelContext } from "../hotel.contex";
import { Hotel, Review } from "../hotel.model";

export const dbRepository: HotelRepository = {
    getHotelList: async () => {
        return await hotelContext.find().lean();

    },
    getHotel: async (id: string) => {
        return await hotelContext.findOne({
            _id: new ObjectId(id)
        }).lean();
    },
    updateReview: async (id: string, review: Review) => {
        return await hotelContext.findOneAndUpdate({
            _id: new ObjectId(id),
        },
            { $push: { reviews: review } }).lean();
    }
};
