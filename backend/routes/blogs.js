const express = require('express')
const BlogModel = require('../models/BlogModel')
const { createBlog, getBlogs, getblog, deleteBlog, updateBlog } = require('../controllers/blogControllers')

const router = express.Router()

//all blogs
router.get('/', getBlogs)

// single blog
router.get('/:id', getblog)

//Post a new blog
router.post('/', createBlog)

//DELETE blog
router.delete('/:id', deleteBlog)

//UPDATE blog
router.patch('/:id', updateBlog)


module.exports = router