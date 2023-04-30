/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import './gallery.css'

const gallery = () => {

  const [responce, setresponce] = useState([]);

  const displayimg = async () => {
    let result = await fetch("http://localhost:5000/gallery")
    result = await result.json()
    setresponce(result);

  };

  useEffect(() => {
    displayimg();
  }, [])

  return (
    <>
      <section className='gallery'>
        <div className='container'>
          <div className='gall'>
            <img src={require('../img/48e485a9-ea0b-4183-97b1-17209d3b2842.jpg')} alt='' />
          </div>
        </div>

        <div class="Container-gallary">
          {responce.map((item, index) =>
            <div class="gallary" key={item._id}>
              <img src={item.image} alt="Uploaded" />
            </div>
          )}
        </div>

      </section>

    </>
  )
}

export default gallery