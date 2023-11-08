import express from "express";
import _ from "lodash";
import LoginService from "../../../controller/access/login.service";

const router = express.Router();

router.post("/basic", LoginService.Login);

export default router;
