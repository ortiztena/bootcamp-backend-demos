"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapHotelListFromModelToApi = exports.mapHotelFromModelToApi = exports.mapHotelFromApiToModel = void 0;

var _review = require("../review/review.mappers");

const mapHotelFromModelToApi = hotel => ({
  _id: hotel._id,
  name: hotel.name,
  summary: hotel.summary,
  bedrooms: hotel.bedrooms,
  beds: hotel.beds,
  bathrooms: Number(hotel.bathrooms),
  address: {
    country: hotel.address.country,
    street: hotel.address.street,
    market: hotel.address.market
  },
  reviews: (0, _review.mapReviewListFromModelToApi)(hotel.reviews),
  images: {
    picture_url: hotel.images.picture_url
  }
});

exports.mapHotelFromModelToApi = mapHotelFromModelToApi;

const mapHotelListFromModelToApi = hotelList => hotelList.map(mapHotelFromModelToApi);

exports.mapHotelListFromModelToApi = mapHotelListFromModelToApi;

const mapHotelFromApiToModel = hotel => ({
  _id: hotel._id,
  name: hotel.name,
  summary: hotel.summary,
  bedrooms: hotel.bedrooms,
  beds: hotel.beds,
  bathrooms: hotel.bathrooms,
  images: {
    picture_url: hotel.images.picture_url
  },
  address: {
    street: hotel.address.street,
    market: hotel.address.market,
    country: hotel.address.country
  },
  reviews: (0, _review.mapReviewListFromApiModelToModel)(hotel.reviews)
});

exports.mapHotelFromApiToModel = mapHotelFromApiToModel;