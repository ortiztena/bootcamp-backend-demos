import * as model from "dals";
import * as apiModel from "./hotel.api-model";

export const mapReviewFromModelToApi = (review: model.Review): apiModel.Review => ({
    _id: review._id,
    date: review.date.toISOString(),
    reviewer_name: review.reviewer_name,
    comments: review.comments
})

export const mapReviewListFromModelToApi = (reviewList: model.Review[]): apiModel.Review[] =>
    Array.isArray(reviewList) ? reviewList.map(mapReviewFromModelToApi) : [];


export const mapHotelFromModelToApi = (hotel: model.Hotel): apiModel.Hotel => ({
    _id: hotel._id,
    name: hotel.name,
    summary: hotel.summary,
    bedrooms: hotel.bedrooms,
    beds: hotel.beds,
    bathrooms: Number(hotel.bathrooms),
    country: hotel.address.country,
    street: hotel.address.street,
    market: hotel.address.market,
    reviews: mapReviewListFromModelToApi(hotel.reviews),
    images: hotel.images.picture_url,

});

export const mapHotelListFromModelToApi = (
    hotelList: model.Hotel[]
): apiModel.Hotel[] => hotelList.map(mapHotelFromModelToApi);

export const mapReviewListFromApiModelToModel = (reviewList: apiModel.Review[]): model.Review[] =>
    Array.isArray(reviewList) ? reviewList.map(mapReviewFromApiModelToModel) : []

export const mapReviewFromApiModelToModel = (review: apiModel.Review): model.Review => ({
    _id: Date.now().toString(),
    date: new Date(review.date),
    reviewer_name: review.reviewer_name,
    comments: review.comments,
})

export const mapHotelFromApiToModel = (hotel: apiModel.Hotel): model.Hotel => ({
    _id: hotel._id,
    name: hotel.name,
    summary: hotel.summary,
    bedrooms: hotel.bedrooms,
    beds: hotel.beds,
    bathrooms: hotel.bathrooms,
    images: { picture_url: hotel.images },
    address: { street: hotel.street, market: hotel.market, country: hotel.country },
    reviews: mapReviewListFromApiModelToModel(hotel.reviews),
});