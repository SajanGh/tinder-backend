import express from "express";

import _ from "lodash";
import SignUpService from "../../../controller/access/signup.service";
const router = express.Router();

router.post("/basic", SignUpService.SignUp);

export default router;
