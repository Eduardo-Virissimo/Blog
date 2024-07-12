import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()

const app = express()


app.use(cors())
app.use(express.urlencoded({extended: true}))


app.listen(process.env.PORT || 8000, ()=>{
  console.log("Servidor rodando na porta: " + process.env.PORT);
})