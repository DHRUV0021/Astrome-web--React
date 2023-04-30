/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './product.css'


const product = () => {

  const [responce, setresponce] = useState([]);

  const handleSubmit = async () => {

    let result = await fetch("http://localhost:5000/product_img")
    result = await result.json()
    setresponce(result);
  };

  useEffect(() => {
    handleSubmit();
  }, [])


  return (
    <>
      <section className='product'>

        <div className='pro'>
          <img src={require('../img/403ffc70-c06f-4154-9fb8-b9475fc19fe9.jpg')} alt='' />
        </div>

        {/* ------------------product card code------------------ */}
        <div className="pro_content">
          {responce.map((item, index) =>
            <tr key={item._id}>

              <div className="load-more-container">
                <input type="checkbox" id="load-more" />
                <ul>
                  <li>
                    <div className="card_product">

                      <div className='pro_tanks'>
                        <img src={item.photo} alt="Uploaded" />
                      </div>

                      <div className='pro_ltr'>
                        <h3>{item.litter} : Litter</h3>
                      </div>

                      <div className="buttonn">
                        <Link to={"/details/" + item._id}> <button className='read'>read-more</button></Link>
                      </div>

                    </div>
                  </li>
                </ul>
              </div>
            </tr>
          )}
        </div>
        <div className='show'>
        <button className='show_button'><Link to="/show">Load-more</Link></button>
      </div>

      </section>
    </>
  )
}

export default product