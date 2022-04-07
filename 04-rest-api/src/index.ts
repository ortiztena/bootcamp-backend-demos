import express from "express";
import { hotelsApi } from "./hotels.api";
import path from "path";

const app = express();
app.use(express.json());

// TODO: Feed env variable in production
app.use("/", express.static(path.resolve(__dirname, "../public")));

app.use("/api/hotels", hotelsApi)

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
