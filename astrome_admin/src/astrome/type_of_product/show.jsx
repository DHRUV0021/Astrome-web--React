/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from 'react'
import './type_of_pro.css'
import { Link } from 'react-router-dom';

const show = () => {

    //--- data show delete API 
    const deletetype_of_pro = async (id) => {
        let result = await fetch(`http://localhost:5000/type_of_pros/${id}`, {
            method: "Delete"
        });
        result = await result.json()
        if (result) {
            alert("delete");
            handleSubmit();
        }
    };

    //--- data get type_of_pro API
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
            <div className='show'>
                <button className='show_button'><Link to="/">Back</Link></button>
            </div>

            <section className='data'>
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

                            {responce.map((item, index) =>
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td><img src={item.photo} alt="Uploaded" /> </td>
                                    <td>{item.litter}</td>
                                    {console.log("item.photo" + item.photo)}

                                    <td className='action'>
                                        <button className='edit'><Link to={"/update_type/" + item._id}><i className="fa-solid fa-pen-to-square"></i></Link></button>

                                        <button className='view'  > <Link to={"/t_view/" + item._id}><i className="fa-regular fa-eye"></i></Link></button>

                                        <button className='delete' onClick={() => deletetype_of_pro(item._id)}><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </section>





        </>
    )
}

export default show