/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const details = () => {


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
      <div className='all_details'>
        <div className='p_details'>
          <div className='img'>
            <img src={product.photo} alt="Uploaded" />
          </div>
          <div className='text'>
            <h2>liter : {product.litter}ltr</h2>
            <h2> layer : {product.layer}</h2>
            <h2> color :{product.color}</h2>
            <h2> size : {product.size}</h2>
            <h2> weight : {product.waight} kg</h2>
          </div>
        </div>
        <div className='all_p_details'>
          <p>{product.all_details}</p>
        </div>
      </div>
      <div className='show'>
        <button className='show_button'><Link to="/product">Back</Link></button>
      </div>
    </>
  )
}

export default details