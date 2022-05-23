"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hotelRepository = void 0;

var _hotel = require("./hotel.mock-repository");

var _hotel2 = require("./hotel.db-repository");

var _constants = require("../../../core/constants");

// TODO: Create env variable
const isApiMock = true;
const hotelRepository = _constants.envConstants.isApiMock ? _hotel.mockRepository : _hotel2.dbRepository;
exports.hotelRepository = hotelRepository;