const BlogModel = require('../models/BlogModel')
const mongoose = require('mongoose')

// get all blog
const getBlogs = async (req,res) => {
    const blogs = await BlogModel.find({}).sort({createdAt: -1})
    res.status(200).json(blogs)
}

// get single blog
const getblog = async (req,res) => {
    const { id } = req.params

    const blog = await BlogModel.findById(id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Noo sch blog'})
    }


    if(!blog) {
        return res.status(404).json({error: 'No such blog'})
    }
    res.status(200).json(blog)
}

// create new blog
const createBlog = async (req,res) => {
    const {image, title, discription,category} = req.body

    try {
        const blog = await BlogModel.create({image,title,discription,category})
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// delete blog 
const deleteBlog = async (req,res) => {
    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Noo sch blog'})
    }

    const blog = await BlogModel.findOneAndDelete({_id: id})

    if(!blog) {
        return res.status(404).json({error: 'No such blog'})
    }
    res.status(200).json(blog)
}


// update blog 
const updateBlog = async (req,res) => {
    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Noo sch blog'})
    }

    const blog = await BlogModel.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!blog) {
        return res.status(404).json({error: 'No such blog'})
    }
    res.status(200).json(blog)
}

module.exports = {
    getBlogs,
    getblog,
    createBlog,
    deleteBlog,
    updateBlog
  
}