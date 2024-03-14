import { Router } from "express";
import { UserController } from "../controllers/user.controller";

export const router = Router();
const userController = new UserController();
router.use("/auth/register", userController.create);

router.use("/auth/login", (req, res) => {
  res.send("register");
});
