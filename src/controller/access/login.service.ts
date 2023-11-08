import * as jwt from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";

import UserRepo from "../../modules/repository/UserRepo";
import { AuthFailureError, BadRequestError } from "../../core/ApiError";
import bcrypt from "bcrypt";
import { secret } from "../../config/config";
const Login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserRepo.findByEmail(req.body.email);

    if (!user) {
      throw new BadRequestError("User not registered");
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      throw new AuthFailureError(
        "Authentication Failure, Password didn't match"
      );
    }
    const accessToken = jwt.sign(user, secret, {
      expiresIn: "365d",
    });
    return res.status(201).json({
      status: "success",
      message: "User Logged in",
      data: { accessToken },
      user,
    });
  } catch (err) {
    res.status(500).send(err);
    throw new Error();
  }
};

const LoginService = { Login };
export default LoginService;
