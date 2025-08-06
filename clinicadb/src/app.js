const express = require('express')

const app = express()
app.use(express.json())

app.use('/', (request, response)=> {
    return response.json("olá")
})

app.listen(3000, ()=> console.log("api rodando"))