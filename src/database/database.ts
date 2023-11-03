import mongoose from "mongoose";

import { db } from "../config/config";

const dbURI = db;
if (dbURI) {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(dbURI)
    .then(() => {
      console.log("Mongoose Connection Successfull!");
    })
    .catch((e) => {
      console.log("Mongoose Connection Errror");
      console.log(e);
    });

  mongoose.connection.on("connected", () => {
    console.log("Mongoose default connection running...");
  });

  mongoose.connection.on("error", (e) => {
    console.log("Mongoose default connection error:" + dbURI);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose default connection disocnnected");
  });

  process.on("SIGNINT", () => {
    // @ts-ignore
    mongoose.connection.close(() => {
      console.log("Mongoose connection disconnected through temrination");
      process.exit(0);
    });
  });
}
