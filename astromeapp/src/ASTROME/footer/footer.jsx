import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <>
      <footer >
        <div className="footer">

          <div className='ftr'>
            <h2>ASTROME</h2>
            <p>A 100% quality product.<p>A quality that matters.</p><p>A company that deals only in the best.</p></p>
          </div>

          <div className='sicon'>
            <div className='sicon_top'>
              <h1>Contact</h1>
            </div>
            <div className='sicon_bottom'>
              <span>
                <a href='https://www.instagram.com/dhruv__oo21/'>
                <i class="fa-brands fa-instagram"></i>
                </a>
              </span>
              <span>
                <a href='https://www.linkedin.com/in/dhruv-gorasiya'>
                <i class="fa-brands fa-facebook"></i>
                </a>
              </span>
              <span>
                <a href='https://twitter.com/DhruvGorasiya?t=wTOF8vKZL8t0G-L1PMAeEQ&s=09'>
                <i class="fa-brands fa-twitter"></i>
                </a>
              </span>
              <span>
                <a href='http://www.google.com'>
                <i class="fa-solid fa-envelope"></i>
                </a>
              </span>
            </div>
          </div>

          <div className='footer-openning'>
            <h1>OPENNING HOURS</h1>
            <h4>Mon - Thu : 9AM - 7PM <br />
              Wed -thu : 9AM -7PM <br />
              fri - sat : 9AM -8PM <br />
              Sunday : closed</h4>
          </div>
        </div>
        <div className='vv'>
          <hr />
          <span><b>Design by:</b> Gorasiya Dhruv</span>
        </div>
      </footer>
    </>
  )
}

export default footer