"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hotel = require("./hotel");

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

var _user = require("./user");

Object.keys(_user).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _user[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _user[key];
    }
  });
});