"use strict";

var _security = require("./security.middlewares");

var helpers = _interopRequireWildcard(require("../../common/helpers/jwt.helpers"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('pods/security/security.middlewares specs', () => {
  describe('authenticationMiddleware specs', () => {
    it('should return 401 when it feeds authorization cookie equals undefined', async () => {
      // Arrange
      const authorization = undefined;
      const verifyJWTStub = jest.spyOn(helpers, 'verifyJWT').mockRejectedValue('Not valid token');
      const req = {
        cookies: {
          authorization
        }
      };
      const res = {
        sendStatus: jest.fn()
      };
      const next = jest.fn(); // Act

      await (0, _security.authenticationMiddleware)(req, res, next); // Assert

      expect(res.sendStatus).toHaveBeenCalled();
      expect(res.sendStatus).toHaveBeenCalledWith(401);
      expect(verifyJWTStub).toHaveBeenCalled();
    });
    it('should call next function and assign userSession if it feeds authorization with token', async () => {
      // Arrange
      const authorization = 'Bearer my-token';
      const userSession = {
        id: '1',
        role: 'admin'
      };
      const verifyJWTStub = jest.spyOn(helpers, 'verifyJWT').mockResolvedValue(userSession);
      const req = {
        cookies: {
          authorization
        }
      };
      const res = {
        sendStatus: jest.fn()
      };
      const next = jest.fn(); // Act

      await (0, _security.authenticationMiddleware)(req, res, next); // Assert

      expect(helpers.verifyJWT).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
      expect(req.userSession).toEqual(userSession);
    });
  });
});