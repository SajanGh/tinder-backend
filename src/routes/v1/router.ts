import express from "express";
import _ from "lodash";
import signup from "./access/signup.controler";
import login from "./access/login.controller";
const router = express.Router();

router.use("/signup", signup);
router.use("/login", login);
// router.use("/profile");
// router.use("/products");
// router.use("/explore");

export default router;
