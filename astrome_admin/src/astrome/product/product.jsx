/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import './product.css'
import { Link } from 'react-router-dom'


const product = () => {

  //------------ post api product 
  const [file, setFile] = useState(null);
  const [litter, setLitter] = useState("");
  const [layer, setlayer] = useState("");
  const [color, setcolor] = useState("");
  const [size, setsize] = useState("");
  const [waight, setwaight] = useState("");
  const [all_details, setall_details] = useState("");

  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!litter || !file || !layer || !color || !size || !waight || !all_details) {
      setError(true);
      return false;
  }
    //In JavaScript, a FormData object is a common way to create a bundle of data to send to the server using XMLHttpRequest or fetch
    const formData = new FormData();
    formData.append('image', file);
    formData.append('litter', litter);
    formData.append('layer', layer);
    formData.append('color', color);
    formData.append('size', size);
    formData.append('waight', waight);
    formData.append('all_details', all_details);

    fetch('http://localhost:5000/product_img', {
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
        <button className='show_button'><Link to="/show_prod">show_product</Link></button>
      </div>
      <center>
        <section className='sec'>
          <div className="box6">
            <form className="form1" onSubmit={handleSubmit}>

              <label>product Photo :</label>
              <input type="file" onChange={handleChange} />
              {error && !file && < span className='error'>**please Enter valid product Photo </span>}

              <label>litter</label>
              <input type="text" onChange={(e) => setLitter(e.target.value)} name="txt"></input>
              {error && !litter && < span className='error'>**please Enter valid litter</span>}

              <label>layer</label>
              <input type="text" onChange={(e) => setlayer(e.target.value)} name="txt"></input>
              {error && !layer && < span className='error'>**please Enter valid layer</span>}

              <label>color</label>
              <input type="text" onChange={(e) => setcolor(e.target.value)} name="txt"></input>
              {error && !color && < span className='error'>**please Enter valid color</span>}

              <label>size</label>
              <input type="text" onChange={(e) => setsize(e.target.value)} name="txt"></input>
              {error && !size && < span className='error'>**please Enter valid size</span>}

              <label>waight</label>
              <input type="text" onChange={(e) => setwaight(e.target.value)} name="txt"></input>
              {error && !waight && < span className='error'>**please Enter valid waight</span>}

              <label>all_details</label>
              <input type="text" onChange={(e) => setall_details(e.target.value)} name="txt"></input>
              {error && !all_details && < span className='error'>**please Enter valid all all_details</span>}

              <input className="button" type="submit" name="s" value="Upload" />
              <input className="button" type="submit" value="Clear" />

            </form>
          </div>
        </section>
      </center>
    </>
  )
}

export default product