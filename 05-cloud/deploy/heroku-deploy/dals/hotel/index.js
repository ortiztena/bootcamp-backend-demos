"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hotel = require("./hotel.model");

Object.keys(_hotel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hotel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hotel[key];
    }
  });
});

var _repositories = require("./repositories");

Object.keys(_repositories).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _repositories[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _repositories[key];
    }
  });
});