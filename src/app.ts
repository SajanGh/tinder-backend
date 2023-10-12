import express, { Request, Response, NextFunction } from "express";

import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import "./database/database"

const app = express();
process.on("uncaughtException", (e) => {
  console.log(e);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

export default app;
