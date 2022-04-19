import { HotelRepository } from "./hotel.repository";
import { Hotel, Review } from "../hotel.model";

export const dbRepository: HotelRepository = {
    getHotelList: async () => {
        throw new Error("Not implemented");
    },
    getHotel: async (id: string) => {
        throw new Error("Not implemented");
    },
    updateReview: async (hotel, review) => {
        throw new Error("Not implemented");
    }
};
