import { BadRequestError } from "../../core/ApiError";
import { Request, Response } from "express";
import UserRepo from "../../modules/repository/UserRepo";
import bcrypt from "bcrypt";
import { InternalErrorResponse } from "../../core/ApiResponse";

const SignUp = async (req: Request, res: Response) => {
  try {
    const user = await UserRepo.findByEmail(req.body.email);
    if (user) {
      throw new BadRequestError("User already registered");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const CreateUser = await UserRepo.create({
      ...req.body,
      password: hashedPassword,
    });
    return res.status(201).send(CreateUser);
  } catch (err) {
    return res.status(400).send(err);
  }
};

const SignUpService = { SignUp };
export default SignUpService;
