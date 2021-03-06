import express from "express";
import { hotelsApi } from "pods/hotel";
import path from "path";
import { createRestApiServer, connectToDBServer, getDBInstance } from "core/servers";
import { envConstants } from "core/constants";
import {
  logRequestMiddleware,
  logErrorRequestMiddleware,
} from "common/middlewares";



const restApiServer = createRestApiServer();


restApiServer.use(logRequestMiddleware);

const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
restApiServer.use("/", express.static(staticFilesPath));

restApiServer.use("/api/hotels", hotelsApi)

restApiServer.use(logErrorRequestMiddleware);



restApiServer.listen(envConstants.PORT, async () => {
  if (!envConstants.isApiMock) {
    await connectToDBServer(envConstants.MONGODB_URI);
    console.log("Connected to DB");
    const db = getDBInstance();
    await db.collection("hotels").insertOne({ name: "Book 1" });
  } else {
    console.log("Running API mock");
  }
  console.log(`Server ready at port ${envConstants.PORT}`);
});
