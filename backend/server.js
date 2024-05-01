require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogs')
const cors = require('cors')

// express app
const app = express()

app.use(cors({
    origin: "https://6632056b9a01dda393e9846c--adorable-taffy-b41dab.netlify.app",
    methods: ["GET","POST","DELET"],
}))

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
