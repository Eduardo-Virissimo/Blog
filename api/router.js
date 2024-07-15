import userController from "./src/Controllers/user.controller.js";
import express from "express"

const router = express.Router()

router.use("/user", userController)
export default router;