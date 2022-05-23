"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _mongoose = require("mongoose");

var _servers = require("../../core/servers");

var _constants = require("../../core/constants");

var _hotel = require("../../dals/hotel/hotel.context");

var _hotel2 = require("./hotel.rest-api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _servers.createRestApiServer)();
app.use((req, res, next) => {
  req.userSession = {
    id: '1',
    role: 'admin'
  };
  next();
});
app.use(_hotel2.hotelsApi);
describe('pods/hotel/hotel.rest-api specs', () => {
  beforeAll(async () => {
    await (0, _servers.connectToDBServer)(_constants.envConstants.MONGODB_URI);
  });
  beforeEach(async () => {
    await _hotel.hotelContext.insertMany({
      _id: "10006666",
      name: "Horto Villa Jardin",
      summary: "One bedroom in the area.",
      bedrooms: 1,
      beds: 2,
      bathrooms: 1,
      images: {
        picture_url: "https://a0.muscache.com/im/pictures/5b408b9e-45da-4808-be65-4edc1f29c453.jpg?aki_policy=large"
      },
      address: {
        street: "Rio de Janeiro, Rio de Janeiro, Brazil",
        market: "Rio De Janeiro",
        country: "Brazil"
      },
      reviews: []
    });
  });
  afterEach(async () => {
    await _hotel.hotelContext.deleteMany();
  });
  afterAll(async () => {
    await (0, _mongoose.disconnect)();
  });
  describe('get hotel list', () => {
    it('should return the whole hotelList with values when it request "/" endpoint without query params', async () => {
      // Arrange
      const route = '/'; // Act

      const response = await (0, _supertest.default)(app).get(route); // Assert

      expect(response.statusCode).toEqual(200);
      expect(response.body).toHaveLength(1);
    });
  });
  it('should return return 201 when it inserts new Hotel', async () => {
    // Arrange
    const route = '/';
    const newHotel = {
      _id: "10006546",
      name: "Ribeira Charming Duplex",
      summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
      bedrooms: 3,
      beds: 5,
      bathrooms: 1,
      images: {
        picture_url: "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"
      },
      address: {
        street: "Porto, Porto, Portugal",
        market: "Porto",
        country: "Portugal"
      },
      reviews: [{
        _id: "58663741",
        date: new Date(),
        reviewer_name: "Cátia",
        comments: "A casa da Ana e do Gonçalo foram o local escolhido para a passagem de ano com um grupo de amigos. Fomos super bem recebidos com uma grande simpatia e predisposição a ajudar com qualquer coisa que fosse necessário.\r\nA casa era ainda melhor do que parecia nas fotos, totalmente equipada, com mantas, aquecedor e tudo o que pudessemos precisar.\r\nA localização não podia ser melhor! Não há melhor do que acordar de manhã e ao virar da esquina estar a ribeira do Porto."
      }]
    }; // Act

    const response = await (0, _supertest.default)(app).post(route).send(newHotel); // Assert

    expect(response.statusCode).toEqual(201); // expect(response.body.id).toEqual(expect.any(String));
    // expect(response.body.name).toEqual(newHotel.name);
    // expect(response.body.beds).toEqual(newHotel.beds);
    // expect(response.body.bedrooms).toEqual(newHotel.bedrooms);
  });
});