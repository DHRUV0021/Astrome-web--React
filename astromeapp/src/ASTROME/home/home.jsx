/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import './home.css'

const home = () => {

  const [responce, setresponce] = useState([]);

  const handleSubmit = async () => {

    let result = await fetch("http://localhost:5000/type_of_image")
    result = await result.json()
    setresponce(result);
  };

  useEffect(() => {
    handleSubmit();
  }, [])


  return (
    <>
      <section className='head'>

        <div id="slider">
          <figure>
            <img src={require('../img/istockphoto-1318620035-612x612.jpg')} alt='' />
            <img src={require('../img/48e485a9-ea0b-4183-97b1-17209d3b2842.jpg')} alt='' />
            <img src={require('../img/th (3).jpg')} alt='' />
            <img src={require('../img/403ffc70-c06f-4154-9fb8-b9475fc19fe9.jpg')} alt='' />
          </figure>
        </div>

        <div className='type'>
          <h1>Types Of product</h1>
        </div>
      </section>

      <section className='tp'>
        <div className="type_boxx">
          {responce.map((item, index) =>
            <tr key={item._id}>
              <div className="card_type">
                <div className="imgBxo">
                  {/* <h2>{item.photo}</h2> */}
                  <img src={item.photo} alt="Uploaded" /></div>
                <div className="details">
                  <h2>{item.litter}<span>Litter</span></h2>
                </div>
              </div>
            </tr>
          )}
        </div>
      </section>
    </>
  )
}

export default home