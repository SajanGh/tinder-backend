import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateRequestBody =
  (schema: z.Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      return res.status(422).send(err.message);
    }
  };

export const validateRequestParams =
  (schema: z.Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.params);
      next();
    } catch (err) {
      return res.status(422).send(err.message);
    }
  };
