"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hotelContext = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const imagesSchema = new _mongoose.Schema({
  picture_url: {
    type: _mongoose.Schema.Types.String,
    required: true
  }
});
const addressSchema = new _mongoose.Schema({
  street: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  market: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  country: {
    type: _mongoose.Schema.Types.String,
    required: true
  }
});
const reviewSchema = new _mongoose.Schema({
  _id: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  date: {
    type: _mongoose.Schema.Types.Date,
    required: true
  },
  reviewer_name: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  comments: {
    type: _mongoose.Schema.Types.String,
    required: true
  }
});
const hotelSchema = new _mongoose.Schema({
  _id: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  name: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  summary: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  images: {
    type: imagesSchema
  },
  address: {
    type: addressSchema
  },
  bedrooms: {
    type: _mongoose.Schema.Types.Number,
    required: true
  },
  beds: {
    type: _mongoose.Schema.Types.Number,
    required: true
  },
  bathrooms: {
    type: _mongoose.Schema.Types.Decimal128,
    required: true
  },
  reviews: [{
    type: reviewSchema
  }]
});

const hotelContext = _mongoose.default.model("Hotel", hotelSchema, 'listingsAndReviews');

exports.hotelContext = hotelContext;