"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashPassword = exports.generateSalt = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

var _util = require("util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const randomBytes = (0, _util.promisify)(_crypto.default.randomBytes);
const saltLength = 16;

const generateSalt = async () => {
  const salt = await randomBytes(saltLength);
  return salt.toString('hex');
};

exports.generateSalt = generateSalt;
const passwordLength = 64; // 64 bytes = 512 bits

const iterations = 16384; // Must be a power of two greater than one (2^x)
// Memory required = 128 * N * r * p (128 * cost * blockSize * parallelization)
// E.g. 128 * 16384 * 8 * 1 = 16 MB

const hashPassword = async (password, salt) => {
  const promise = new Promise((resolve, reject) => {
    _crypto.default.scrypt(password, salt, passwordLength, {
      cost: iterations,
      blockSize: 8,
      parallelization: 1,
      maxmem: 32 * 1024 * 1024
    }, (error, hashedPassword) => {
      if (error) {
        reject(error);
      }

      resolve(hashedPassword.toString('hex'));
    });
  });
  return promise;
};

exports.hashPassword = hashPassword;