import React, { useState } from 'react'
import "../css/BlogForm.css"
function BlogForm() {
    const [title,setTitle] = useState('')
    const [image,setImage] = useState('')
    const [discription,setDiscription] = useState('')
    const [category,setcategory] = useState('other')
    const [error,setError] = useState(null)

    
    const handlesubmit = async (e) => {
        e.preventDefault()

        const blog = {image,title,discription,category}

        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setImage('')
            setDiscription('')
            setcategory('other')
            setError(null)
            console.log('new blog added',json)
            window.location.reload();
        }
    }




  return (
    <form className='create' onSubmit={handlesubmit}>
        <h3 style={{textAlign:'center'}}>Add a New blog</h3>

        <label>Blog image: (http://)</label>
        <input 
        type='text'
        onChange={(e) => setImage(e.target.value)}
        value={image}
        placeholder='Enter a image link (https://wallpapers.com/)'
        />

        <label>Excersize Title:</label>
        <input 
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder='Enter a title'
        />

        <label>Category</label>
        <select
        className='selectcategory'
        value={category}
        onChange={e => setcategory(e.target.value)}
        >
          <option value="magazine">Magazine</option>
          <option value="space">space</option>
          <option value="economy">economy</option>
          <option value="spor">spor</option>
          <option value="other">Other category</option>
        </select>

        <label>discription:</label>
        <textarea style={{resize:'none'}} rows="4" cols="50"
           placeholder='Enter a discription'
           onChange={(e) => setDiscription(e.target.value)}
           value={discription}
        />

        <button >Add</button>
       
    </form>
  )
}

export default BlogForm