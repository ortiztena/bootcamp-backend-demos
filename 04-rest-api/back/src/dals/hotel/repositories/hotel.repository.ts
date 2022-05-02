import { Hotel, Review } from "../hotel.model";

export interface HotelRepository {
    getHotelList: () => Promise<Hotel[]>;
    getHotel: (id: string) => Promise<Hotel>;
    updateReview: (id: string, review: Review) => Promise<boolean>;
}