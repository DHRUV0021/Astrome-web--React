/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import './type_of_pro.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const update_type = () => {

  //------------------POST-------------------------//
  const [photo, setPhoto] = useState("");
  const [litter, setLitter] = useState("");

  const [error, setError] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const update_type_product = async (event) => {

    event.preventDefault();
    
    if (!litter || !photo) {
      setError(true);
      return false;
  }
    //In JavaScript, a FormData object is a common way to create a bundle of data to send to the server using XMLHttpRequest or fetch
    const formData = new FormData();
    formData.append('image', photo);
    formData.append('litter', litter);

    let result = await fetch(`http://localhost:5000/type_of_pro/${params.id}`, {
      method: "Put",
      body: formData,
    });

    result = await result.json()
    console.warn(result)
    if (result) {
      navigate('/show');
    }
  }

  useEffect(() => {
    gettype_product();
  }, []);

  const gettype_product = async () => {
    let result = await fetch(`http://localhost:5000/type_of_pro/${params.id}`);
    result = await result.json();
    // setPhoto(result.photo)
    setLitter(result.litter)

  };

  return (
    <>
      <div className='show'>
        <button className='show_button'><Link to="/show">Back</Link></button>
      </div>

      <center>
        <section className='sec'>
          <div className="box6">
            <form className="form1">
              <label>product Photo :</label>
              <input type="file" onChange={handleChange} name="upfile" id=""  ></input>
              {error && !photo && < span className='error'>**please Enter valid file</span>}
              <label>litter</label>
              <input type="text" value={litter} onChange={(e) => setLitter(e.target.value)} name="txt"></input>
              {error && !litter && < span className='error'>**please Enter valid file</span>}
              <input type="submit" onClick={update_type_product} name="s" value="update" className="button" />
            </form>
          </div>
        </section>
      </center>

    </>
  )
}

export default update_type