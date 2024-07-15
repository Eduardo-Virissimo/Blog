import express from "express"
import loginServices from "../Services/login.service.js"

const loginController = express.Router()

loginController.post("/", async(req,res)=>{
  const data = req.body
  await loginServices.login(data)
})

export default loginController