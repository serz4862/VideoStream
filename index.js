// require('dotenv').config()
import express from 'express'
const app = express()
const port  = process.env.PORT || 8000
import cors from 'cors'

app.use(cors())

app.get('/', (req,res)=>{
    res.send('I am Youtube')
})

app.get('/login', (req,res)=>{
    res.send("<h1> I have made my login successfully on youtube</h1>")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})