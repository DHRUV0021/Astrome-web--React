/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useEffect } from 'react'
import './gallery.css'

const gallery = () => {

  //------- post image
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //In JavaScript, a FormData object is a common way to create a bundle of data to send to the server using XMLHttpRequest or fetch
    const formData = new FormData();
    formData.append('image', file);

    fetch('http://localhost:5000/gallery', {
      method: 'POST',
      body: formData,

    }).then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };

  //---------------- get image

  const [responce, setresponce] = useState([]);

  const displayimg = async () => {
    let result = await fetch("http://localhost:5000/gallery")
    result = await result.json()
    setresponce(result);
  };

  useEffect(() => {
    displayimg();
  }, []);

  //--- data show delete API 
  const deletetype = async (id) => {
    let result = await fetch(`http://localhost:5000/gallery/${id}`, {
      method: "Delete"
    });
    result = await result.json()
    if (result) {
      alert("delete");
      handleSubmit();
    }
  };

  return (

    <>
      <center>
        <section className='sec'>
          <div className="box6">
            <form className="form1" onSubmit={handleSubmit} >

              <label>product Photo :</label>
              <input type="file" onChange={handleChange} />

              <input type="submit" name="s" value="upload" className="button" />

            </form>
          </div>
        </section>
      </center>

      {/*----------------Display data--------------  */}
      <div className='image'>
        {responce.map((item, index) =>
          <div className="speciality" id="speciality">
            <div className="box" key={item._id}>
              <img src={item.image} alt="Uploaded" />
            </div>
            <div>
              <button className='delete_img' onClick={() => deletetype(item._id)}>delete</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default gallery