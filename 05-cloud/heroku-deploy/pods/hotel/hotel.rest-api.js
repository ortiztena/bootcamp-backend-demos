"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hotelsApi = void 0;

var _express = require("express");

var _hotel = require("./hotel.mappers");

var _dals = require("../../dals");

var _hotel2 = require("./hotel.helpers");

var _security = require("../security");

const hotelsApi = (0, _express.Router)();
exports.hotelsApi = hotelsApi;
hotelsApi.get("/", (0, _security.authorizationMiddleware)(), async (req, res, next) => {
  try {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);
    const hotelList = await _dals.hotelRepository.getHotelList();
    const paginatedHotelList = (0, _hotel2.paginateHotelList)(hotelList, page, pageSize);
    res.send((0, _hotel.mapHotelListFromModelToApi)(paginatedHotelList));
  } catch (error) {
    next(error);
  }
}).get('/:id', (0, _security.authorizationMiddleware)(), async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const hotel = await _dals.hotelRepository.getHotel(id);
    res.send((0, _hotel.mapHotelFromModelToApi)(hotel));
  } catch (error) {
    next(error);
  }
}).put('/:id', (0, _security.authorizationMiddleware)(), async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const review = req.body;
    await _dals.hotelRepository.updateReview(id, review);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}).post('/', (0, _security.authorizationMiddleware)(['admin']), async (req, res, next) => {
  try {
    const hotel = req.body;
    const newHotel = await _dals.hotelRepository.saveHotel((0, _hotel.mapHotelFromApiToModel)(hotel));
    res.status(201).send((0, _hotel.mapHotelFromModelToApi)(newHotel));
  } catch (error) {
    next(error);
  }
}).delete('/:id', (0, _security.authorizationMiddleware)(['admin']), async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    await _dals.hotelRepository.deleteHotel(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});