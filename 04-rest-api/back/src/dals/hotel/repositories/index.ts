import { mockRepository } from "./hotel.mock-repository";
import { dbRepository } from "./hotel.repository";
import { envConstants } from "../../../core/constants";

// TODO: Create env variable
const isApiMock = true;

export const bookRepository = envConstants.isApiMock ? mockRepository : dbRepository;
