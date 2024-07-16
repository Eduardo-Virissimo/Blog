import jwt from "jsonwebtoken"
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const auth = async (req,res, next)=>{
  const {token} = req.cookies
  
  if(!token){
    res
    .status(401)
    .json({message: "Insira o token de autorização"})
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    if(decode){
      next()}
  
    }catch (error) {
    res
    .status(401)
    .json({message: "Token inválido ou expirado"})
  
  }

}

export default auth