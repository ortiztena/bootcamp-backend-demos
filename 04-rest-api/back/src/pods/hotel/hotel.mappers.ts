import * as model from "dals";
import { mapReviewListFromApiModelToModel, mapReviewListFromModelToApi } from "pods/review/review.mappers";
import * as apiModel from "./hotel.api-model";

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