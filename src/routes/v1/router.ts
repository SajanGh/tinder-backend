import express from "express";
import SignupService from "../../controller/access/signup.service";
import signup from "./access/signup.controler";
const router = express.Router();

router.use("/signup", signup);



export default router;