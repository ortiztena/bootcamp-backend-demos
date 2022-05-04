import { HotelRepository } from "./hotel.repository";
import { db } from "../../mock-data";
import { Review } from "../hotel.model";




export const mockRepository: HotelRepository = {
    getHotelList: async () => db.hotels,
    getHotel: async (id: string) => db.hotels.find((b) => b._id === id),
    updateReview: async (id: string, review: Review) => {

        db.hotels = db.hotels.map((hotel) => {
            if (hotel._id === id) {
                if (hotel.reviews.find((x) => x._id === review._id)) {
                    review._id = (Number(review._id) + hotel.reviews.length).toString();
                }
                return { ...hotel, reviews: [...hotel.reviews, review] }
            }
            else return hotel
        })
        return true;
    },
};