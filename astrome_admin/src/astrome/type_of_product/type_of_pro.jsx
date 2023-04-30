/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import './type_of_pro.css'
import { Link } from 'react-router-dom';

const type_of_pro = () => {

  //------------------POST-------------------------//
  const [file, setFile] = useState(null);
  const [litter, setLitter] = useState("");

  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!litter || !file) {
      setError(true);
      return false;
  }
    //In JavaScript, a FormData object is a common way to create a bundle of data to send to the server using XMLHttpRequest or fetch
    const formData = new FormData();
    formData.append('image', file);
    formData.append('litter', litter);

    fetch('http://localhost:5000/type_of_pro', {
      method: 'POST',
      body: formData,

    }).then(response => response.json())
      .then(data => {
        console.log(data)
      });
  };

  return (
    <>
      <div className='show'>
        <button className='show_button'><Link to="/show">show_product</Link></button>
      </div>

      <center>
        <section className='sec'>
          <div className="box6">
            <form className="form1" onSubmit={handleSubmit}>

              <label>product Photo :</label>
              <input type="file" onChange={handleChange} />
              {error && !file && < span className='error'>**please Enter valid file</span>}
              <label>litter</label>
              <input type="text" onChange={(e) => setLitter(e.target.value)} name="txt"></input>
              {error && !litter && < span className='error'>**please Enter valid litter</span>}
              <input type="submit" name="s" value="upload" className="button" />

            </form>
          </div>
        </section>
      </center>
    </>
  )
}

export default type_of_pro