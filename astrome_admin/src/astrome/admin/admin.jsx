/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import './admin.css'
import { useNavigate } from 'react-router-dom';

const admin = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const onLogIn = async () => {
    console.warn(name, password);
    let result = await fetch('http://localhost:5000/logIn', {
      method: 'post',
      body: JSON.stringify({ name, password }),
      headers: {
        'Content-type': 'application/json'
      }
    });
    result = await result.json()
    console.warn(result)
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result))
      navigate('/')
      alert("login successfully...")
    } else {
      alert(" user not found")
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem('user')

    if (auth) {
      navigate('/');
    }
  });

  return (
    <>
      <section className='user'>
        <form><center>
          <div className='abcc' >
            <h2>LOGIN</h2>
          </div>
          <div className='login'>
            <input type="text" className='first' name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" ></input>
            <input type="password" className='second' name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" ></input>
            <div className="btn" onClick={onLogIn}>Login</div>
          </div>
        </center>
        </form>
      </section>
    </>
  )
}

export default admin