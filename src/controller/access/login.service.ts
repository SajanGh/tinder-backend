import { UserModel } from "../../modules/model/user";

const Signin = async (req: Request, res: Response) => {
  const User = await UserModel.findOneBy({
    email: req.body.email,
  });
};

if (!user) {
  return res.status(404).send({
    message: "ERROR: User doesn't exist",
  });
}

export const Signin;
