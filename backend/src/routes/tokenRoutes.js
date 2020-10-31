import { Router } from "express";
import tokenController from "../controllers/TokenController";
import userVerify from "../middlewares/userVerify";

const router = new Router();

router.post("/", tokenController.store);
router.get("/", userVerify, tokenController.show);

export default router;
