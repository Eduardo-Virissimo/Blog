import db from "../db/db.js"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()
const saltRounds = Number(process.env.SALT_ROUNDS

)
const userServices = {
  create: (data)=>{

    
    return new Promise((resolve, reject)=>{
      if(data.password && data.email && data.username){
        const hash = bcrypt.hashSync(data.password, saltRounds)
      db.query("insert into User (username, email, password) values(?,?,?)", [data.username, data.email, hash], (erro, results)=>{
        if(erro){ reject(erro); return}
        resolve({message: "usuário criado com sucesso", results});
      })}else{
        reject({message: "Falta informação"})
      }
    })
  },
  read: (data)=>{
    return new Promise((resolve, reject)=>{
      db.query("Select username, email from User where id = (?)", [data], (erro, results)=>{
        if(erro){reject(erro);return}
        if(results[0]){
          resolve({message: "Usuário encontrado", results: results[0]});return
        }else{
          resolve({message: "Usuário não encontrado ou inexistente", results: results[0]});return

        }
      })
    })
  },
  list: ()=>{
    return new Promise((resolve, reject)=>{
      db.query("Select username, email from User", (err, results)=>{
        if(err){reject(err);return}
        resolve({message: "Usuário encontrado", results})
      })
    })
  },
  update: (data)=>{
    const query = "Update User set"
    const dataArray = []
    if(data.username){
      query += " username = (?)"
      dataArray.push(data.username)
    }
    if(data.email){
      query += " email = (?)"
      dataArray.push(data.email)
    }
    if(data.password){
      const hash = bcrypt.hashSync(data.password, saltRounds)
      query += " password = (?)"
      dataArray.push(password)
    }
    query += " where id = (?);"
    dataArray.push(id)
    return new Promise((resolve, reject)=>
      db.query(query, dataArray, (error, results)=>{
        if(error){reject(error);return}
        resolve({message: "Usuário encontrado", results})
      })
    )
  },
  delete: (id)=>{
    return new Promise((resolve, reject)=>
      db.query("Delete from User where id = (?)", [id],(error, results)=>{
        if(error){reject(error);return}
        if(results.affectedRows == 1){
        resolve({message: "Usuário deletado"}); return;
      }
        else{
          resolve({message: "Usuário não encontrado"}); return;}
      })
    )
  }    
}

export default userServices