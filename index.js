const express = require("express")
const cors = require("cors")
const uuid = require("uuid")

const app = express() 

app.use(express.json())
app.use(cors())

const porta = 3001 


const postsList = []


//get
app.get("/users", (request, response)=>{
    return response.json(postsList)
})


//post
app.post("/users", (request, response)=>{
   const {name, message} = request.body

   const post = {
       id:uuid.v4(),
       name,
       message
   }

   postsList.push(post)

   return response.status(201).json(post)

})

//delete
app.delete("/users/:id", (request, response)=>{
    const {id} = request.params
    const index = request.postIndex

    postsList.splice(index, 1)

    return response.status(204).json()

})




app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})