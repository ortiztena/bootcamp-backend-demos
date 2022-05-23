"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapReviewListFromModelToApi = exports.mapReviewListFromApiModelToModel = exports.mapReviewFromModelToApi = exports.mapReviewFromApiModelToModel = void 0;

const mapReviewFromModelToApi = review => ({
  _id: review._id,
  date: new Date(review.date),
  reviewer_name: review.reviewer_name,
  comments: review.comments
});

exports.mapReviewFromModelToApi = mapReviewFromModelToApi;

const mapReviewListFromModelToApi = reviewList => Array.isArray(reviewList) ? reviewList.map(mapReviewFromModelToApi) : [];

exports.mapReviewListFromModelToApi = mapReviewListFromModelToApi;

const mapReviewFromApiModelToModel = review => ({
  _id: Date.now().toString(),
  date: new Date(),
  reviewer_name: review.reviewer_name,
  comments: review.comments
});

exports.mapReviewFromApiModelToModel = mapReviewFromApiModelToModel;

const mapReviewListFromApiModelToModel = reviewList => Array.isArray(reviewList) ? reviewList.map(mapReviewFromApiModelToModel) : [];

exports.mapReviewListFromApiModelToModel = mapReviewListFromApiModelToModel;