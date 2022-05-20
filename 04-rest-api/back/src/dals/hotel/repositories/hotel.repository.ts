import { Hotel, Review } from "../hotel.model";

export interface HotelRepository {
    getHotelList: () => Promise<Hotel[]>;
    getHotel: (id: string) => Promise<Hotel>;
    saveReview: (id: string, review: Review) => Promise<boolean>;
}