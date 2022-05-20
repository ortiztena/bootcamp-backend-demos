import { mockRepository } from "./hotel.mock-repository";
import { dbRepository } from "./hotel.db-repository";
import { envConstants } from "core/constants";


// TODO: Create env variable
const isApiMock = envConstants.isApiMock;

export const hotelRepository = envConstants.isApiMock ? mockRepository : dbRepository;

