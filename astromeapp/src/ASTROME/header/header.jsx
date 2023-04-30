import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <>
      <section className='header'>
        <div className='headname'>
          <img src={require('../img/astromeogo.jfif')} alt='' />
        </div>


        <div className='mainsection'>
          <nav className='menu'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>

      </section>
    </>
  )
}

export default header