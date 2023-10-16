import express, { Request, Response, NextFunction } from "express";

import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import "./database/database";
import { ApiError, InternalError, NotFoundError } from "./core/ApiError";
import routesV1 from "./routes/v1/router";

const app = express();
process.on("uncaughtException", (e) => {
  console.log(e);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

app.use("/v1", routesV1);

app.use((req: Request, res: Response, next: NextFunction) =>
  next(new NotFoundError())
);

// middleware error handler

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    ApiError.handle(err, res);
  } else {
    if (err instanceof InternalError) {
      ApiError.handle(new InternalError(), res);
    }
  }
});
export default app;
