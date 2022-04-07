import { Router } from "express";
export const hotelsApi = Router();
import { getHotelsList, getHotelById, insertHotelReview } from "./mock-db";


hotelsApi
    .get('/', async (req, res) => {
        const hotelList = await getHotelsList()
        res.send(hotelList)
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