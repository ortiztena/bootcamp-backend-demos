import { HotelRepository } from "./hotel.repository";
import { ObjectId } from "mongodb";
import { getDBInstance } from "core/servers";
import { Hotel, Review } from "../hotel.model";

export const dbRepository: HotelRepository = {
    getHotelList: async () => {
        const db = getDBInstance();
        return await db.collection<Hotel>("hotels").find().toArray();
    },
    getHotel: async (id: string) => {
        const db = getDBInstance();
        return await db.collection<Hotel>("hotels").findOne({
            _id: new ObjectId(id)
        });
    },
    updateReview: async (id: string, review: Review) => {
        const db = getDBInstance();
        await db.collection<Hotel>("hotels").findOneAndUpdate({
            _id: new ObjectId(id),
        },
            { $push: { reviews: review } });
        return true
    }
}
