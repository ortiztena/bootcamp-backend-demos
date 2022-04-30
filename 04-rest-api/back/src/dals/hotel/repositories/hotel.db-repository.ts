import { HotelRepository } from "./hotel.repository";
import { ObjectId } from "mongodb";
import { hotelContext } from "../hotel.contex";
import { Hotel, Review } from "../hotel.model";

export const dbRepository: HotelRepository = {
    getHotelList: async () => {
        await hotelContext.find().lean();
    },
    getHotel: async (id: string) => {
        await hotelContext.findOne({
            _id: new ObjectId(id)
        }).lean();
    },
    updateReview: async (id: string, review: Review) => {
        await hotelContext.findOneAndUpdate({
            _id: new ObjectId(id),
        },
            { $push: { reviews: review } }).lean();
    }
}
