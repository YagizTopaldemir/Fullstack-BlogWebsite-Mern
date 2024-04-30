import React, { useEffect, useState } from 'react'
import CSblogdetail from '../companent/CSblogdetail'
import "../css/controllscreen.css"
import Navbar from '../companent/navbar'
import BlogForm from '../companent/BlogForm'


function ControllScreen() {
  const [blogs, setBlogs] = useState(null)

  
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs')
      const json = await response.json()
    
      if(response.ok) {
        setBlogs(json)
      }
      if (!response.ok) {
        console.log('respont couldnt')
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div className='homescreen'>

      <div className='blogs'>
        {blogs && blogs.map((blog) => (
          <CSblogdetail key={blog._id} blog={blog} />
        ))}
        <div style={{height:'70px'}}></div>
      </div>
    
      <div className='blogfrom'>
        <BlogForm />
      </div>
    </div>
  )
}

export default ControllScreen