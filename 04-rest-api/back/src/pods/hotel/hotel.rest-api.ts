import { Router } from "express";
export const hotelsApi = Router();
import { mapHotelListFromModelToApi, mapHotelFromModelToApi, mapHotelFromApiToModel } from "./hotel.mappers";
import { getHotelsList, getHotelById, updateReview } from "../../mock-db";
import { hotelRepository } from 'dals';


hotelsApi
    .get("/", async (req, res, next) => {
        try {
            const page = Number(req.query.page);
            const pageSize = Number(req.query.pageSize);
            let hotelList = await hotelRepository.getHotelList();
            if (page && pageSize) {
                const startIndex = (page - 1) * pageSize;
                const endIndex = Math.min(startIndex + pageSize, hotelList.length);
                hotelList = hotelList.slice(startIndex, endIndex);
            }
            res.send(mapHotelListFromModelToApi(hotelList))
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
    .put('/:id', async (req, res) => {
        const { id } = req.params;
        const review = req.body;
        await updateReview(id, review);
        res.sendStatus(204)
    })