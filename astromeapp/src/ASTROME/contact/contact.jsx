/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState } from 'react';
import './contact.css'


const contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMessage] = useState("");

  const submitContact = async () => {
    console.warn(name, email, massage);
    let result = await fetch('http://localhost:5000/contact', {
      method: 'post',
      body: JSON.stringify({ name, email, massage }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json()
    console.warn(result);
  }
  return (

    <>
      <h1 className='contact_h1'> contact us</h1>
      <div className=" contact">

        <div className=' contact_text'>
          <h2>Get in touch</h2>
          <hr></hr>
          <h5>Email : dhruv@gmail.com</h5>
          <h5>number : 7046934474</h5>
          <h5>Adress : Ahmedabad</h5>
        </div>

        <div className='contact_form'>
          <form >
            <input type='text' onChange={(e) => setName(e.target.value)} placeholder="name"></input><br></br>
            <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" ></input><br></br>
            <textarea type='textarea' onChange={(e) => setMessage(e.target.value)} placeholder="Message" className='msg'></textarea><br></br>
            <button onClick={submitContact}  >submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default contact