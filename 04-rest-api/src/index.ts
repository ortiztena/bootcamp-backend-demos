import express from "express";
import { getHotelsList, getHotelById } from "./mock-db";

const app = express();

app.get("/", (req, res) => {
  res.send(console.log("welcome to the server's home page"));
});

app.get("/api/hotels", async (req, res) => {
  const hotelList = await getHotelsList()
  res.send(hotelList)
})

app.get("/api/hotels/:id"), async (req, res) => {
  const hotelById = await getHotelById(req.params.id)
  res.send(hotelById)
}

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
