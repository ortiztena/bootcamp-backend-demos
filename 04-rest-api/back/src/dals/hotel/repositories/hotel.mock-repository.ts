import { HotelRepository } from "./hotel.repository";
import { db } from "../../mock-data";
import { Review } from "../hotel.model";
import { v4 as uuidv4 } from 'uuid';

export const mockRepository: HotelRepository = {
    getHotelList: async () => db.hotels,
    getHotel: async (id: string) => db.hotels.find((b) => b._id === id),
    saveReview: async (id: string, review: Review) => {

        db.hotels = db.hotels.map((hotel) => {
            if (hotel._id === id) {
                if (hotel.reviews.find((x) => x._id === review._id)) {
                    review._id = uuidv4(review._id);
                }
                return { ...hotel, reviews: [...hotel.reviews, review] }
            }
            else return hotel
        })
        return true;
    },
};