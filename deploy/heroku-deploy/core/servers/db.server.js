"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectToDBServer = void 0;

var _mongoose = require("mongoose");

var _constants = require("../constants");

(0, _mongoose.set)("debug", !_constants.envConstants.isProduction);

const connectToDBServer = async connectionURI => {
  await (0, _mongoose.connect)(connectionURI, {
    useNewUrlParser: true,
    // https://mongoosejs.com/docs/deprecations.html#the-usenewurlparser-option
    useUnifiedTopology: true,
    // https://mongoosejs.com/docs/deprecations.html#useunifiedtopology
    useFindAndModify: false // https://mongoosejs.com/docs/deprecations.html#findandmodify

  });
};

exports.connectToDBServer = connectToDBServer;