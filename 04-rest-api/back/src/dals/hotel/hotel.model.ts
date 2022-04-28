import { ObjectId } from "mongodb"

export interface Hotel {
    _id: ObjectId
    name: string
    summary: string
    bedrooms: number
    beds: number
    bathrooms: number
    images: Images
    address: Address
    reviews: Review[]
}

export interface Images {
    picture_url: string
}

export interface Address {
    street: string
    market: string
    country: string
}

export interface Review {
    _id: string
    date: string
    reviewer_name: string
    comments: string
}