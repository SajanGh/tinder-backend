import express from "express";

import _ from "lodash";
import SignUpService from "../../../controller/access/signup.service";
import SignupValidation from "../../../validation/signup.validation";
import { validateRequestBody } from "../../../@guard/validation.guard";
const router = express.Router();

router.post(
  "/basic",
  validateRequestBody(SignupValidation.User),
  SignUpService.SignUp
);

export default router;
