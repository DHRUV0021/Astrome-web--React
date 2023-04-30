/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const update_product = () => {


    //------------------post--------------------------//
    const [photo, setPhoto] = useState("");
    const [litter, setLitter] = useState("");
    const [layer, setlayer] = useState("");
    const [color, setcolor] = useState("");
    const [size, setsize] = useState("");
    const [waight, setwaight] = useState("");
    const [all_details, setall_details] = useState("");


    const [error, setError] = useState(false);

    const params = useParams();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setPhoto(event.target.files[0]);
    };

    const updateproduct = async (event) => {

        event.preventDefault();

        if (!litter || !photo || !layer || !color || !size || !waight || !all_details) {
            setError(true);
            return false;
        }
        //In JavaScript, a FormData object is a common way to create a bundle of data to send to the server using XMLHttpRequest or fetch
        const formData = new FormData();
        formData.append('image', photo);
        formData.append('litter', litter);
        formData.append('layer', layer);
        formData.append('color', color);
        formData.append('size', size);
        formData.append('waight', waight);
        formData.append('all_details', all_details);

        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: "Put",
            body: formData
        });

        result = await result.json()
        console.warn(result)
        if (result) {
            navigate('/show_prod');
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        // setPhoto(result.photo)
        setLitter(result.litter)
        setlayer(result.layer)
        setcolor(result.color)
        setsize(result.size)
        setwaight(result.waight)
        setall_details(result.all_details)
    };

    return (
        <>
            <div className='show'>
                <button className='show_button'><Link to="/show_prod">show_product</Link></button>
            </div>
            <center>
                <section className='sec'>
                    <div className="box6">
                        <form className="form1" >

                            <label>product Photo :</label>
                            <input type="file" onChange={handleChange} name="upfile" id=""  ></input>
                            {error && !photo && < span className='error'>**please Enter valid product Photo </span>}

                            <label>litter</label>
                            <input type="text" value={litter} onChange={(e) => setLitter(e.target.value)} name="txt"></input>
                            {error && !litter && < span className='error'>**please Enter valid litter</span>}


                            <label>layer</label>
                            <input type="text" value={layer} onChange={(e) => setlayer(e.target.value)} name="txt"></input>
                            {error && !layer && < span className='error'>**please Enter valid layer</span>}

                            <label>color</label>
                            <input type="text" value={color} onChange={(e) => setcolor(e.target.value)} name="txt"></input>
                            {error && !color && < span className='error'>**please Enter valid color</span>}

                            <label>size</label>
                            <input type="text" value={size} onChange={(e) => setsize(e.target.value)} name="txt"></input>
                            {error && !size && < span className='error'>**please Enter valid size</span>}

                            <label>waight</label>
                            <input type="text" value={waight} onChange={(e) => setwaight(e.target.value)} name="txt"></input>
                            {error && !waight && < span className='error'>**please Enter valid waight</span>}

                            <label>all_details</label>
                            <input type="text" value={all_details} onChange={(e) => setall_details(e.target.value)} name="txt"></input>
                            {error && !all_details && < span className='error'>**please Enter valid all all_details</span>}

                            <input type="submit" name="s" onClick={updateproduct} value="Update" className="button" />

                        </form>
                    </div>
                </section>
            </center>
        </>
    )
}

export default update_product