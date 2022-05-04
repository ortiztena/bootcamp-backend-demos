import { Review } from "pods/review/review.api-model"


export interface Hotel {
    _id: string
    name: string
    summary: string
    bedrooms: number
    beds: number
    bathrooms: number
    images: string
    country: string;
    street: string;
    market: string
    reviews: Review[]
}


