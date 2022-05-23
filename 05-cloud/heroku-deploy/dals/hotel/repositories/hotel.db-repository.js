"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbRepository = void 0;

var _hotel = require("../hotel.context");

const dbRepository = {
  getHotelList: async () => await _hotel.hotelContext.find().lean(),
  getHotel: async id => await _hotel.hotelContext.findOne({
    _id: id
  }).lean(),
  saveHotel: async hotel => {
    return await _hotel.hotelContext.findOneAndUpdate({
      _id: hotel._id
    }, {
      $set: hotel
    }, {
      upsert: true,
      new: true
    }).lean();
  },
  deleteHotel: async id => {
    const {
      deletedCount
    } = await _hotel.hotelContext.deleteOne({
      _id: id
    });
    return deletedCount === 1;
  },
  updateReview: async (id, review) => {
    const hotel = await _hotel.hotelContext.findOne({
      _id: id
    });

    if (hotel.reviews.find(r => r._id === review._id)) {
      review._id = (Number(review._id) + hotel.reviews.length).toString();
    }

    return await _hotel.hotelContext.findOneAndUpdate({
      _id: id
    }, {
      $push: {
        reviews: review
      }
    }).lean();
  }
};
exports.dbRepository = dbRepository;