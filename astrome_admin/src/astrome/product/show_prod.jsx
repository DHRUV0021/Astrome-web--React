/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import './product.css'
import { Link } from 'react-router-dom'


const show_prod = () => {


    //delete
    const deletes = async (id) => {
        let result = await fetch(`http://localhost:5000/products/${id}`, {
            method: "Delete"
        });
        result = await result.json()
        if (result) {
            alert("delete");
            handleSubmit();
        }
    };


    //--- data get type_of_pro API
    const [resproduct, setresponce] = useState([]);

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
            <div className='show'>
                <button className='show_button'><Link to="/product">Back</Link></button>
            </div>

            <div className='data'>
                <div className="type_pro_data">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>product_photo</th>
                                <th>litter</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {resproduct.map((item, index) =>
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td><img src={item.photo} alt="Uploaded" /> </td>
                                    <td>{item.litter}</td>

                                    <td className='action'>

                                        <button className='edit'><Link to={"/update_product/" + item._id}><i className="fa-solid fa-pen-to-square"></i></Link></button>

                                        <button className='view'  > <Link to={"/view/" + item._id}><i className="fa-regular fa-eye"></i></Link></button>

                                        <button className='delete' onClick={() => deletes(item._id)}><i className="fa-sharp fa-solid fa-trash"></i></button>

                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default show_prod