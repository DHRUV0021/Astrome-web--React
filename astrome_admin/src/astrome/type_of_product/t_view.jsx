/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const t_view = () => {

    const [product, setProduct] = useState([]);
    const params = useParams();

    const gett_view = async (id) => {
        let result = await fetch(`http://localhost:5000/type_of_view/${params.id}`);
        result = await result.json();
        console.warn(result)
        setProduct(result)
    };

    useEffect(() => {
        gett_view();
    }, [])

    return (
        <>
            <div className='show'>
                <button className='show_button'><Link to="/show">Back</Link></button>
            </div>

            <div className='type_view'>
                <img src={product.photo} alt="Uploaded" />
                <h1>liter : {product.litter}ltr</h1>
            </div>
        </>
    )
}

export default t_view