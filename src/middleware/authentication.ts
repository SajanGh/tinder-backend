import * as jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { secret } from "../config/config";

const Authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      status: "fail",
      message: "Unauthorized",
    });
  }

  try {
    const token = authHeader?.split(" ")[1];
    jwt.verify(token, secret);
    // const user = verify;
    // req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ status: "fail", message: "Unauthorizated" });
  }
};

export default Authentication;
