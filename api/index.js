import express, { json } from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./src/db/db.js"
import router from "./router.js"
dotenv.config()


const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))

app.use(router)

app.listen(process.env.PORT || 8000, ()=>{

  console.log("Servidor rodando na porta: " + process.env.PORT);
})

app.get("/", (req,res)=>{
  db.query("Select * from User", (error, results)=>{
    res.send(results)
  })
  
})

export default app