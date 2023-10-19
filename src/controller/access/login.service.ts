import { NextFunction, Request, Response } from "express";
import { UserModel } from "../../modules/model/user";
import UserRepo from "../../modules/repository/UserRepo";
import { AuthFailureError, BadRequestError } from "../../core/ApiError";
import bcrypt from "bcrypt";

const Login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserRepo.findByEmail(req.body.email);

    if (!user) {
      throw new BadRequestError("User not registered");
    }
    if (!user.password) {
      throw new BadRequestError("Credentials not set");
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      throw new AuthFailureError("Authentication Failure");
    }
    res.status(200).json(user);
  } catch (err) {
    // throw new BadRequestError("Something went wrong");
    res.status(500).send(err);
  }
};

const LoginService = { Login };
export default LoginService;
