import * as model from "dals";
import { ObjectId } from "mongodb";
import * as apiModel from "./hotel.api-model";

export const mapHotelFromModelToApi = (hotel: model.Hotel): apiModel.Hotel => ({
    _id: hotel._id.toHexString(),
    name: hotel.name,
    summary: hotel.summary,
    bedrooms: hotel.bedrooms,
    beds: hotel.beds,
    bathrooms: hotel.bathrooms,
    address: hotel.address,
    reviews: hotel.reviews,
    images: hotel.images,

});

export const mapHotelListFromModelToApi = (
    hotelList: model.Hotel[]
): apiModel.Hotel[] => hotelList.map(mapHotelFromModelToApi);

export const mapHotelFromApiToModel = (hotel: apiModel.Hotel): model.Hotel => ({
    _id: new ObjectId(hotel._id),
    name: hotel.name,
    summary: hotel.summary,
    bedrooms: hotel.bedrooms,
    beds: hotel.beds,
    bathrooms: hotel.bathrooms,
    images: hotel.images,
    address: hotel.address,
    reviews: hotel.reviews,
});