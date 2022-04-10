import express from "express";
import { hotelsApi } from "./hotels.api";
import path from "path";
import { createRestApiServer } from "./core/servers";
import { envConstants } from "./core/constants";


const restApiServer = createRestApiServer();


restApiServer.use(async (req, res, next) => {
  console.log(req.url);
  next();
});

const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
restApiServer.use("/", express.static(staticFilesPath));

restApiServer.use("/api/hotels", hotelsApi)

restApiServer.use(async (error, req, res, next) => {
  console.error(error);
  res.sendStatus(500)
});

restApiServer.listen(envConstants.PORT, () => {
  console.log(`Server ready at port ${envConstants.PORT}`);
});
