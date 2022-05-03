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


export interface Review {
    _id: string
    date: string
    reviewer_name: string
    comments: string
}