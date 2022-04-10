import { Hotel } from "../hotel.model";

export interface BookRepository {
    getBookList: () => Promise<Hotel[]>;
    getBook: (id: string) => Promise<Hotel>;
    updateReview: (id: string, review: string[]) => Promise<boolean>;
}