import { BadRequestError } from "../../core/ApiError";
import { Request, Response } from "express";
import UserRepo from "../../modules/repository/UserRepo";
import { User } from "../../types/interface";

const SignUp = async (req: Request, res: Response) => {
  try {
    const user = await UserRepo.findByEmail(req.body?.email);
    if (user) {
      throw new Error("User already registered");
    }
    const CreateUser = await UserRepo.create(
      //     {
      //   username: req.body.username,
      //   email: req.body.emai,
      //   firstName: req.body.firstName,
      //   lastName: req.body.lastName,
      //   bio: req.body.bio,
      //   dateOfBirth: req.body.dateOfBirth,
      // }
      req.body
    );
    return res.status(201).send(CreateUser);
  } catch (err) {
    console.log(err);
  }
};

const SignUpService = { SignUp };
export default SignUpService;
