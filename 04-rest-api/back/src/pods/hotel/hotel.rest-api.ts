import { Router } from "express";
export const hotelsApi = Router();
import { mapHotelListFromModelToApi, mapHotelFromModelToApi } from "./hotel.mappers";
import { hotelRepository } from 'dals';
import { paginateHotelList } from './hotel.helpers';


hotelsApi
    .get("/", async (req, res, next) => {
        try {
            const page = Number(req.query.page);
            const pageSize = Number(req.query.pageSize);
            const hotelList = await hotelRepository.getHotelList();
            const paginatedHotelList = paginateHotelList(hotelList, page, pageSize);

            res.send(mapHotelListFromModelToApi(paginatedHotelList))
        } catch (error) {
            next(error);

        }

    })
    .get('/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            const hotel = await hotelRepository.getHotel(id)
            res.send(mapHotelFromModelToApi(hotel))
        } catch (error) {
            next(error);
        }
    })
    .put('/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            const review = req.body
            await hotelRepository.updateReview(id, review);
            res.sendStatus(204)
        } catch (error) {
            next(error);
        }

    })