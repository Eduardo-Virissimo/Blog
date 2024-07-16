import loginController from "./src/Controllers/login.controller.js";
import userController from "./src/Controllers/user.controller.js";
import postController from "./src/Controllers/post.controller.js";
import express from "express"

const router = express.Router()

router.use("/post", postController)
router.use("/user", userController)
router.use("/login", loginController)

export default router;