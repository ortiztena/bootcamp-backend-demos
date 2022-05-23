"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = void 0;

var _mongoose = require("mongoose");

var _constants = require("../core/constants");

var _servers = require("../core/servers");

var _hotel = require("../dals/hotel/hotel.context");

const runQueries = async () => {
  const result = await _hotel.hotelContext.findOne({
    _id: {
      $eq: '10006546'
    }
  }).lean();
};

const run = async () => {
  await (0, _servers.connectToDBServer)(_constants.envConstants.MONGODB_URI);
  await runQueries();
  await (0, _mongoose.disconnect)();
};

exports.run = run;