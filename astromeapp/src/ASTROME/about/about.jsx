import React from 'react'
import './about.css'

const about = () => {
  return (
    <>
      <div className="about_section">
        <div className="about_img"></div>

        <div className="aboutUs">
          <div className="aboutUs_img">
            <img src={require('../img/th (3).jpg')} alt='' />
          </div>
          <div className="aboutUs_text">
            <h1>About Us</h1>
            <p>We maintain high quality of our product by keeping quality of all operation in respect of manufacturing process and maintain relationship with our clients. Astrome Containers in business since 2011 and is committed to manufacture and supply solar products and quality having optimum reliability and long life to support clean and green environment.
              <br></br><br></br>
              We produces the highest quality products of Solar Water Heater offers 10 Years warranty to back them up.
            </p>
          </div>
        </div>
        <div className="aboutUs  a_bottom">
          <div className="aboutUs_text">
            <h1>our product</h1>
            <p>
            Our Company aims is Quality, Efficiency andReliability. So, Our Company uses the Good materials available, Maintain and utilizes a thorough Quality Management regime and continuing training for the staff to the needs of its customers.
              We produces the highest quality products of Unbreakable Water Storage Tank offers 10 Years warranty to back them up.
            <br></br><br></br>
              Astrome mould plast Containers are manufacturer of Unbreakable Water Storage Tank, Solar Water Heater and Other Variety of Different products.
            </p>
          </div>
          <div className="aboutUs_img">
            <img src={require('../img/d8770a21-059c-43d8-9e5b-72ffc1791e51.jpg')} alt='' />
          </div>
        </div>
        <div className="about_us"></div>

      </div>
    </>
  )
}

export default about