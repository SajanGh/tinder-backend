import express from "express";
import _ from "lodash";
import LoginService from "../../../controller/access/login.service";
import Authentication from "../../../middleware/authentication";
const router = express.Router();

router.post("/basic", Authentication, LoginService.Login);

export default router;
