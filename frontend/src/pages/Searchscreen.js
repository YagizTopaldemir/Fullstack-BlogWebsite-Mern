import React, { useEffect, useState } from 'react'
import "../css/searchscreen.css"
import { useNavigate } from 'react-router-dom';

function Searchscreen() {
  const [blogs,setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const blogsslice = blogs.slice(0,20)

  
  useEffect(() => {
    const fetchblog = async () => {
      const response = await fetch('/api/blogs')
      const json = await response.json()

      if (response.ok) {
        setBlogs(json)
      }

      if (!response.ok) {
        console.log('responde couldnt')
      }
    }

    fetchblog()
  }, [])
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  const filteredData = blogs.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));



  return (
    <div className='serach-container'>
      <div className='searchpage'>
        <div style={{flexDirection:'row',display:'flex',alignItems:'center',width:'100%',height:'45px',overflow:'hidden',marginLeft:'10px',marginTop:'30px',gap:'5px'}}>
        <input  className='searchbloginput' type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
       <div style={{width:'43px',height:'43px',backgroundColor:'#0fbe44',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'10px'}}>
       <img width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2ZzUuUURSHXzdlNAURoW41ym2boIVfiX9BSy2iQAz8H5JaqO3dZxBESx382NaiD21Z1qZNu8yVUc0YPXHxQLfT9TYznjvzTr0PDAwD7/mdw33PPR+TZQUF+QPoAW4CD4BXwCegKp9tYBNYBG4A3VneAIaBMvCd2tkDloHBPARwFljj8KwAfa0K4hrwGTt2gYlmB3En4tAbYBYYBc4Dx+XTL7/NAVuR52eaFcTdAxx4AYzUYecS8LQlwbD/OmkqwCTQ0YC9DmBKbGjGUya2zgl3vQ4Y2B4EdgI502vj/e9i+naqWATh2R+SeuNTtrLv1wnNpKnIvs6tgM6ApYArdj7PG8mJGnPmpdJasmw7XBX2GTIxHtYbUVp7QJeFYdc7+bw28Tiu+VZpXrcw6hpAn1kTb+Oa80rzvoVR18X6jJp4G9ccU5obFkZdrfA5Z+JtXNO1Nj4fLYzqqlsy8TauWVKa31IEcsLE27jmSaW5+6+8Wu8tjG7mINmfWRh1M7bPnIm3cc17SnMhRUHcMvE2rvlOaV6xMNodaFGGTTwO67kp0qcCnLYy7rYdehpM1TTqnFy0FHCDj2bKTOCXznRA54K1iFvZ+FQtd1LS9erB6qGVfV+oT8ZPnx2Lll4GNz3qus3kGRvv/xScCBx9VSa7RpcP04GTcDwBjiQJRMRnCLMBXK7zdtKJrVkBOlsRDDIUzUt17pcGsCTfx6TY6ToRYyn1yYwHciYVy8DRlMH0BhYT9fIDeAystzQYh1vZyCugO4AYX4FHwEWx0Qms/uWZcvJgxJkutyhwM7Yk/7a0GF+AD7LqWQCuAqcCz+cnmMPiEjvQEmlWk95mTQ5mrQim2fAfnsw6cCzLO9R2mzX3/8dEJ3M7aycIB9NeQRwQTHsGoXImzZ+lBQVZlJ/po/gO7uhxQgAAAABJRU5ErkJggg==" /> </div>
        </div>
      <div className='blogs-contain'>
      {filteredData.map(blog => (
          <div className='blog-container-id' key={blog._id}>
          <img  className='blog-image' src={blog.image}/>
       <div className='blog-detail-part'>
         <p style={{fontSize:'22px',fontWeight:'700'}}>{blog.title.slice(0,40)}...</p>
         <p style={{fontSize:'18px',fontWeight:'600'}}>{blog.category}</p>
         <p>{blog.discription.slice(0,100)} . . .</p>
         
      <button onClick={() => { navigate(`/${blog._id}`)}} className='readmore'>Read More</button>
       </div>
       </div>
        ))}
        </div> 
      </div>
    </div>
  )
}

export default Searchscreen