import db from "../db/db.js";
import dayjs from "dayjs"


const postService = {
  
  create: (data)=>{
    return new Promise(async(resolve, reject)=>{

      const date = dayjs().toDate()      
      if(!data.tittle || !data.userId || !data.content){
        reject({message: "Insira todas as informações da postagem"});return;
      }

      await db.query("INSERT INTO Post (tittle, content, creationDate, userId) values (?,?,?,?) ",
      [data.tittle, data.content, date, data.userId], (error, results)=>{
        if(error){
          reject(error);return;
        }
        resolve({message: "Post criado com sucesso", results})
      })}) 
    }, 
  
  read: (data)=>{
    return new Promise((resolve, reject)=>{

      db.query("Select id, userId, tittle, content from Post where id = ?", [data], (erro, results)=>{
        if(erro){reject(erro);return}
        if(results[0]){
          resolve({message: "Post encontrado", results: results[0]});return
        }else{
          resolve({message: "Post não encontrado ou inexistente", results: results[0]});return
        }
      })
    })
    },

  list: ()=>{

    return new Promise((resolve, reject)=>{
      db.query("Select id, userId, tittle, content from Post", (err, results)=>{
        if(err){reject(err);return}
        resolve({message: "Posts encontrados", results})
      })
    })
  },
   
  update: (data) => {
    let query = "UPDATE Post SET"
    const dataArray = []
    
    if (data.tittle) {
      query += " tittle = ?,"
      dataArray.push(data.tittle)
    }
    if (data.content) {
      query += " content = ?,"
      dataArray.push(data.content)
    }

    // Remover a última vírgula e adicionar WHERE id = ?
    query = query.slice(0, -1)
    query += " WHERE id = ?;"
    dataArray.push(data.id)

    return new Promise((resolve, reject) =>
      db.query(query, dataArray, (error, results) => {
        if (error) { reject(error); return }
        resolve({ message: "Post atualizado com sucesso", results })
      })
    )
  },
  delete: (id)=>{
    return new Promise((resolve, reject)=>
      db.query("DELETE FROM Post WHERE id = (?)", [id],(error, results)=>{
        if(error){reject(error);return}
        if(results.affectedRows == 1){
        resolve({message: "Post deletado"}); return;
      }
        else{
          resolve({message: "Post não encontrado"}); return;}
      })
    )
  }    


  }


export default postService