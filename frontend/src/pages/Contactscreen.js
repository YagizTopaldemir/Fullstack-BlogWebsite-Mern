import React, { useState } from 'react'
import "../css/contactscreen.css"
function Contactscreen() {
  const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [message,setMessage] = useState('')

  return (
    <div className='contact-container'>
      <div className='contactpage'>
      <form className='createemail'>
        <h1 style={{textAlign:'center'}}>Contact</h1>

        <label>Name:</label>
        <input 
        type='text'
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder='Enter a Name'
        />

        <label>Email:</label>
        <input 
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder='Enter a Email'
        />

     
        <label>Message:</label>
        <textarea style={{resize:'none'}} rows="4" cols="50"
           placeholder='Enter a Message'
           onChange={(e) => setMessage(e.target.value)}
           value={message}
        />

        <button >Send</button>
       
    </form>
      </div>
    </div>
  )
}

export default Contactscreen