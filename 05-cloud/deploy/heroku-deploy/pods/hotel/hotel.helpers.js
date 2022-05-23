"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paginateHotelList = void 0;

const paginateHotelList = (hotelList, page, pageSize) => {
  let paginatedHotelList = [...hotelList];

  if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, paginatedHotelList.length);
    paginatedHotelList = paginatedHotelList.slice(startIndex, endIndex);
  }

  return paginatedHotelList;
};

exports.paginateHotelList = paginateHotelList;