import loginController from "./src/Controllers/login.controller.js";
import userController from "./src/Controllers/user.controller.js";
import express from "express"

const router = express.Router()

router.use("/user", userController)
router.use("/login", loginController)
export default router;