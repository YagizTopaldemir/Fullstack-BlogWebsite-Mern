import React, { useEffect, useState } from 'react'
import "../css/HomeScreen.css"
import { Link,useNavigate, useParams } from 'react-router-dom';

function Categorycreen() {
    const [blogs,setBlogs] = useState([]);
    const navigate = useNavigate();
    const [categoryblog,setCategoryblog] = useState([])
    const { id } = useParams();
    const blogsslice = categoryblog.slice(0,20)

    const categorydata = [
      {id:1,category:'Space'},
      {id:2,category:'Economy'},
      {id:3,category:'Magazine'},
      {id:4,category:'Spor'},
    ]
  
   
const categorytext = categorydata[id - 1].category

    useEffect(() => {
      const fetchblog = async () => {
        const response = await fetch('/api/blogs')
        const json = await response.json()

        if (response.ok) {
          setBlogs(json)
          const spaceCategoryBlogs = json.filter(blog => blog.category.trim() === categorytext.toLowerCase());
          setCategoryblog(spaceCategoryBlogs);
        }

        if (!response.ok) {
          console.log('responde couldnt')
        }
      }

      fetchblog()
    }, [id])
    
   
    
  return (
    <div className='Home-container'>
      <div className='blog-contain'>
      <h2>{categorytext} category</h2>
        {categoryblog && blogsslice.map((blog) => {
           const currentDate = new Date(blog.createdAt);
  

           const hour = currentDate.getHours();
           const minute = currentDate.getMinutes();
           const day = currentDate.getDate();
           const month = currentDate.getMonth() + 1; 
           const year = currentDate.getFullYear();
          return(
            <div className='blog-container-id' key={blog._id}>
               <img  className='blog-image' src={blog.image}/>
            <div className='blog-detail-part'>
              <p style={{fontSize:'22px',fontWeight:'700'}}>{blog.title.slice(0,40)}...</p>
              <p style={{fontSize:'18px',fontWeight:'600'}}>{blog.category}</p>
              <p>{blog.discription.slice(0,100)} . . .</p>
              <p>{day}/{month}/{year} {hour}:{minute}</p>
           <button onClick={() => { navigate(`/${blog._id}`)}} className='readmore'>Read More</button>
            </div>
            </div>
          )
        })}
    
      </div>

      <div className='category-contain'>
        <div className='category-text'>Category</div>
        <div className='categorys'>
          {categorydata.map((category) => (
  <p style={{borderBottom:'2px solid rgba(0,0,0,0.2)',height:'40px',paddingLeft:'15px'}}  onClick={() => { navigate(`/Space/${category.id}`)}} key={category.id}>{category.category}</p>
          ))}
         
        </div>
      </div>
    <div style={{height:'100vh'}}></div>
    </div>
  )
}

export default Categorycreen