const mongoose = require('mongoose')

const Schema = mongoose.Schema


const blogSchema = new Schema({
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    discription: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    }
}, { timestamps:true })

module.exports = mongoose.model('Blog', blogSchema)