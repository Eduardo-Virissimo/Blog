import express from "express"
import loginServices from "../Services/login.service.js"
import dayjs from "dayjs"

const loginController = express.Router()
loginController.post("/", async(req,res)=>{
  const data = req.body
  const date = dayjs()

  const cookieOptions = {
    httpOnly: true,
    expires: date.add(10, "hours").toDate(),
    secure: true
  }
  await loginServices.login(data).then(r=>{
    res
    .cookie("token", r, cookieOptions)
    .json({message: "usuário logado com sucesso"})
  }).catch(e=>{
    res
    .status(400)
    .json({e})
  })
})

export default loginController