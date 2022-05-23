"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockRepository = void 0;

var _mockData = require("../../mock-data");

const mockRepository = {
  getHotelList: async () => _mockData.db.hotels,
  getHotel: async id => _mockData.db.hotels.find(b => b._id === id),
  saveHotel: async hotel => {
    if (hotel._id) {
      _mockData.db.hotels = _mockData.db.hotels.map(h => h._id === hotel._id ? { ...h,
        ...hotel
      } : h);
      return hotel;
    } else {
      hotel._id = (_mockData.db.hotels.length + 1).toString();
      const newHotel = { ...hotel
      };
      _mockData.db.hotels = [..._mockData.db.hotels, newHotel];
      return newHotel;
    }
  },
  deleteHotel: async id => {
    _mockData.db.hotels = _mockData.db.hotels.filter(h => h._id !== id);
    return true;
  },
  updateReview: async (id, review) => {
    _mockData.db.hotels = _mockData.db.hotels.map(hotel => {
      if (hotel._id === id) {
        if (hotel.reviews.find(x => x._id === review._id)) {
          review._id = (Number(review._id) + hotel.reviews.length).toString();
        }

        return { ...hotel,
          reviews: [...hotel.reviews, review]
        };
      } else return hotel;
    });
    return true;
  }
};
exports.mockRepository = mockRepository;