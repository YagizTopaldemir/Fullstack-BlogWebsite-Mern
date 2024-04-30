import "../css/readmore.css"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function Readmorescreen() {
    const { id } = useParams();
    const [blog,setBlog] = useState([]);

    useEffect(() => {
      const fecthblog = async () => {
        const response = await fetch(`/api/blogs/${id}`)
        const json = await response.json()

        if(response.ok) {
            setBlog(json)
        }
        if(!response.ok) {
            alert('aa')
        }

      }

      fecthblog()
    }, [])
    
    const currentDate = new Date(blog.createdAt);
  

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();

  return (
    <div className='readmore-container'>
       <div className="readmoreblog">
       <div className="rmimagecont"> <h2>{blog.title}</h2><img  className='rmblogimage' src={blog.image}/></div>
      <div className="rmdiscription-container">
      <div className="rmdiscription">
      <h4>{blog.title}</h4>
        {blog.discription}
       
        <div style={{height:'90px'}}></div>
        <p>{day}/{month}/{year} {hour}:{minute}</p>
        <div style={{height:'30px'}}></div>
      </div>
   
      </div>
      
       </div>
    </div>
  )
}

export default Readmorescreen