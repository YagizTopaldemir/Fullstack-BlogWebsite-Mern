import React from 'react'
import "../css/blogdetail.css"
function CSblogdetail({blog}) {
    const currentDate = new Date(blog.createdAt);
  

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();



    
    const handledelete = async () => {
        const response = await fetch('/api/blogs/' + blog._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            console.log('silindi')
            window.location.reload();
        }
        if(!response.ok) {
            alert('a')
        }
    }


  return (
    <div className='blog-detail'>
        
        <div className='blog-detail-img'>
        <h4>{blog.title}</h4>
        <img src={blog.image}/>
       
        </div>
        
        <div className='text-detail'>
        <p className='td-blogtitle'>{blog.title}</p>
            <div>{day}/{month}/{year}</div>
            <div> {hour}:{minute}</div>
            <button className='delete-button' onClick={handledelete}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADpUlEQVR4nO3dv2oVQRTH8UHQRhIhsbDQThOw1CI+g12MeQP/or6DpY2iIPgOJvgAFr6EFkE7o9Emfy3985UxE7isd292Z+bOmZk9HwgENOM5v3Pv7rp7d2OMUkoppZRSSmUEeEy4J9J9DDn8IzoEwfCP6BAEw697CMAFYB04oH4HwBtg0WQU/jbDsw2cz2EA9pU/VK9zGMAQNjtt9qXzH/oA9nIYgN0hDdV6DgNYHPBO+JLJgT0asDsku02kfvvuwCOP8JVSSimllFKKypncUTmTOypnckflTO6onMkdlTO5o3Imd1TO5M6zr8/ACjDjvpaBjYi5fQJuxFjf5M4z/Lkx68wBm4T7CMzHWt/kziOglQlrrRLuZsz1Te48ApqZsNYs4eZjrm9yF7shAqWuV5x0QE2p6xUXuyECpa5XnHRATanrFRe7IQKlrlecdEBNqesVF7shAqWuV5x0QE2p6xUXuyECpa5XnHRATanrFRe7IQKlrlecdEBNqesVF7shAqWuV5x0QE2p6xUXuyECpa5XnHRATanrFRe7IQKlrlecdEBNqesVF7shAqWuV5x0QE2p6xUXuyEC9Vz/C/ASuA5cBE67rwX3WaJXJneFDmALuA+cMqUrcADvgHOmFgUO4ISpSWkDqI4OQJgOQJgOQFgNA+DwKWBr7vB0y32/4BXIFNaregAchrUzZqldYMljvSX3s007UxlC7IAI5FG/fXW22eszBBe+/Zl0zx2NHRCBPOr/dsySNtBrHda52vJOGvW9b31dGogaEIE86rfbaEKG0DF862vf+ro0EDUgAnnUb5/+2MXYzVGHzc4o3QQ1uTOfuz5D6Bm+/Td0JzwOcKXHw2j/bY56bHb+G1xUxL2J7gzhZjz76PNq3uv5d6cTviu8r9UJa9mbt0MtB/TSZwjy4buifW6kPttyI7X9s1Ab424EFxjC9MN3Bfs+SmDF3bc7676PEf6RTXdT9qzQENKEX+DvE/gDPJrCjlkmfFfoB8oJ/8GU3wlpw3dFPqOM8B969NbnULPzaYuogMvAL/IO/17C/YDIu+AF+YZ/t+qdsCv4JPCW/MK/U/1haGMIz4GfyPsN3B7Ef8Ra9glPgffAD2TCvzWYUxE1wOPEms8JPOk+s+SuCZd7Orp0TL4m3Bp+NhdkSsfx14Rbwx9Zo+vmKP414dJx/DXhTjvRjkOIf024dEy+Jpz/x1JKx+E14XI/mFXRENZGPkpo3xXevzty0np/AYxcMkN5z0E5AAAAAElFTkSuQmCC" /></button>
        </div>

    </div>
  )
}

export default CSblogdetail