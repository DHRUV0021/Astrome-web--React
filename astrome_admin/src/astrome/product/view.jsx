/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './product.css';
import { useParams } from 'react-router-dom';


const view = () => {

  const [product, setProduct] = useState([]);
  const params = useParams();

  const getview = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    console.warn(result)
    setProduct(result)
  }

  useEffect(() => {
    getview();
  }, [])

  return (
    <>
      <div className='show'>
        <button className='show_button'><Link to="/show_prod">Back</Link></button>
      </div>

      <div className='all_details'>
        <div className='p_details'>
          <div className='img'>
            <img src={product.photo} alt="Uploaded" />
          </div>
          <div className='text'>
            <h2>liter : <span>{product.litter}liter</span></h2>
            <h2> layer : <span>{product.layer}</span></h2>
            <h2> color :<span>{product.color}</span></h2>
            <h2> size : <span>{product.size}</span></h2>
            <h2> weight : <span>{product.waight} kg</span></h2>
          </div>
        </div>
        <div className='all_p_details'>
          <p>{product.all_details}</p>
        </div>
      </div>
    </>
  )
}

export default view