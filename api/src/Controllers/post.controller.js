import express from "express"
import postService from "../Services/post.service.js";
import auth from "../Middlewares/auth.js";
const postController = express.Router()

postController.post("/",auth ,async(req,res)=>{
  const data = req.body;

  await postService.create(data).then(r=>{
    res
    .status(201)
    .json({message: "Post criado com sucesso", r})
  }).catch(e=>{
    res
    .status(400)
    .json({e})
  })

})
postController.put("/", auth, async(req,res)=>{
  const data = req.body
  
  await postService.update(data).then(r=>{
    res
    .status(200)
    .json(r)
  }).catch(e=>{
    res
    .status(400)
    .json({e})
  })
  
})

postController.get("/:id", auth, async(req,res)=>{
  const {id} = req.params
  
  await postService.read(id).then(r=>{
    res
    .status(200)
    .json(r)
  }).catch(e=>{
    res
    .status(400)
    .json({e})
  })
  
})

postController.get("/", auth, async(req,res)=>{

  await postService.list().then(r=>{
    res
    .status(200)
    .json(r)
  }).catch(e=>{
    res
    .status(400)
    .json({e})
  })
  
})

postController.delete("/:id", auth, async(req,res)=>{
  const {id} = req.params

  await postService.delete(id).then(r=>{
    res
    .status(204)
    .json(r)
  }).catch(e=>{
    res
    .status(400)
    .json({e})
  })
  
})



export default postController