import React from 'react'
import Img_About_Us from '../../assets/images/img_about_us.jpg'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <div className="AboutUsCont">
      <img src={Img_About_Us} style={{width: "915px"}} />
      <div className="AboutUs">
        <h2>About Us</h2>
        <p>
          For more than 30 years we have been delivering world-class
          construction and we've built many lasting relationships along the way.
        </p>
        <p>
          We've matured into an industry leader and trusted resource for those
          seeking quality, innovation and reliability when building in the U.S.
        </p>
        <button>More on Our History</button>
      </div>
    </div>
  );
}
