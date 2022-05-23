"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = void 0;

var _mongoose = require("mongoose");

var _servers = require("../core/servers");

var _constants = require("../core/constants");

var _hotel = require("../dals/hotel/hotel.context");

var _user = require("../dals/user/user.context");

var _mockData = require("../dals/mock-data");

var _helpers = require("../common/helpers");

const run = async () => {
  await (0, _servers.connectToDBServer)(_constants.envConstants.MONGODB_URI);

  for (const user of _mockData.db.users) {
    const salt = await (0, _helpers.generateSalt)();
    const hashedPassword = await (0, _helpers.hashPassword)(user.password, salt);
    await _user.userContext.create({ ...user,
      password: hashedPassword,
      salt
    });
  }

  try {
    await _hotel.hotelContext.insertMany(_mockData.db.hotels);
  } catch (error) {
    console.log(error);
  }

  await (0, _mongoose.disconnect)();
};

exports.run = run;