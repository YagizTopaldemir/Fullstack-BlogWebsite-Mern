require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogs')
// express app
const app = express()

//
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})


// routes
app.use('/api/blogs',blogRoutes)


// connect to mongo 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
// listen app
app.listen(7777, () => {
    console.log('connected to mongo & Listening 7777')
})
})
.catch((error) => {
    console.log(error)
})
