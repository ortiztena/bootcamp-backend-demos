"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapUserFromModelToApi = void 0;

var _s3RequestPresigner = require("@aws-sdk/s3-request-presigner");

var _clientS = require("@aws-sdk/client-s3");

var _clients = require("../../core/clients");

const bucket = 'backdev-demo-test';

const mapAvatar = async avatar => {
  const command = new _clientS.GetObjectCommand({
    Bucket: bucket,
    Key: avatar
  });
  const expiresIn = 60 * 60 * 24;
  return await (0, _s3RequestPresigner.getSignedUrl)(_clients.s3Client, command, {
    expiresIn
  });
};

const mapUserFromModelToApi = async user => {
  const avatar = await mapAvatar(user.avatar);
  return {
    email: user.email,
    role: user.role,
    avatar
  };
};

exports.mapUserFromModelToApi = mapUserFromModelToApi;