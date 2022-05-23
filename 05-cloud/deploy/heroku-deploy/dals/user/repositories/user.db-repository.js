"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbRepository = void 0;

var _helpers = require("../../../common/helpers");

var _user = require("../user.context");

const dbRepository = {
  getUserByEmailAndPassword: async (email, password) => {
    const user = await _user.userContext.findOne({
      email
    }).lean();
    const hashedPassword = await (0, _helpers.hashPassword)(password, user.salt);
    return user.password === hashedPassword ? {
      _id: user._id,
      email: user.email,
      role: user.role
    } : null;
  },
  getUserById: async id => await _user.userContext.findOne({
    _id: id
  }, {
    email: 1,
    role: 1
  }).lean()
};
exports.dbRepository = dbRepository;