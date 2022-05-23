"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = void 0;

var _clientS = require("@aws-sdk/client-s3");

var _s3RequestPresigner = require("@aws-sdk/s3-request-presigner");

const run = async () => {
  try {
    const client = new _clientS.S3Client({
      region: 'eu-west-3'
    });
    const bucket = 'backdev-demo-test';
    const fileName = 'test.png';
    const command = new _clientS.GetObjectCommand({
      Bucket: bucket,
      Key: fileName
    });
    const url = await (0, _s3RequestPresigner.getSignedUrl)(client, command);
    console.log({
      url
    });
  } catch (error) {
    console.error(error);
  }
};

exports.run = run;