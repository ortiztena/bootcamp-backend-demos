import express from "express";
import { hotelsApi } from "pods/hotel";
import path from "path";
import { createRestApiServer } from "core/servers";
import { envConstants } from "core/constants";
import {
  logRequestMiddleware,
  logErrorRequestMiddleware,
} from "common/middlewares";
import { securityApi } from 'pods/security';


const restApiServer = createRestApiServer();


restApiServer.use(logRequestMiddleware);

const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
restApiServer.use("/", express.static(staticFilesPath));

restApiServer.use("/api/hotels", hotelsApi)

restApiServer.use(logErrorRequestMiddleware);

restApiServer.use('/api/security', securityApi);

restApiServer.listen(envConstants.PORT, () => {
  console.log(`Server ready at port ${envConstants.PORT}`);
});
