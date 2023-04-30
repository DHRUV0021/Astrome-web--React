/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header.css'

const header = () => {

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/Admin')
  };
  const auth = localStorage.getItem('user');

  return (
    <>
      <section className='head'>
        <div className='container'>
          <div className='abc'>
            <div className='admin'>
              <h1>ADMIN-PANEL</h1>
            </div>

            {/*------------------------menu section start----------------------------*/}

            <div className='xyz'>
              <nav className='menu'>
                <ul>{auth ? <>
                  <li><Link to="/">typeOFpro</Link></li>
                  <li><Link to="/product">product</Link></li>
                  <li><Link to="gallery">gallery</Link></li>
                  <li><Link to="/contact">contact</Link></li>
                  <button className="btn" onClick={logout}><Link to="/Admin">logout</Link></button>
                </> : <></>} </ul>
              </nav>
            </div>

            {/*------------------------menu section ends----------------------------*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default header