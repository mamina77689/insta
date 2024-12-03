const express = require('express')
const mongoose = require('mongoose')
 
const postRoute = require('./routes/postRoute.js')
const dotenv = require('dotenv')
 
const app = express()
const port = 8080
 
const connectDatabase = async() => {
    const res = await mongoose.connect(
        process.env.MONGODB
    )
 
    if (res) console.log("db connected")
}

connectDatabase()
 
app.use(express.json())
 
app.use(userRoute);
 
 
 
app.listen(port, () => {
    console.log(`your backend server is running on ${port}`)
})