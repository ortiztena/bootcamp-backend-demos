import { Router } from "express";
export const hotelsApi = Router();
import { getHotelsList, getHotelById, insertHotelReview } from "./mock-db";


hotelsApi
    .get("/", async (req, res, next) => {
        try {
            const page = Number(req.query.page);
            const pageSize = Number(req.query.pageSize);
            let hotelList = await getHotelsList();
            if (page && pageSize) {
                const startIndex = (page - 1) * pageSize;
                const endIndex = Math.min(startIndex + pageSize, hotelList.length);
                hotelList = hotelList.slice(startIndex, endIndex);
            }
            res.send(hotelList)
        } catch (error) {
            next(error);

        }

    })
    .get('/:id', async (req, res) => {
        const { id } = req.params;
        const hotel = await getHotelById(id)
        res.send(hotel)
    })
    .put('/:id', async (req, res) => {
        const { id } = req.params;
        const review = req.body;
        await insertHotelReview(id, review);
        res.sendStatus(204)
    })