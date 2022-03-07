import React from 'react'
import Icon_Fb from '../../assets/images/icon_fb.png'
import Icon_Linkedin from "../../assets/images/icon_linkedin.png";
import Icon_Twitter from "../../assets/images/icon_twitter.png";
import website_logo from "../../assets/images/logo_website.png";
import './Bottom.css'

export default function Bottom() {
  return (
    <div className="BottomCont">
      <div className="BottomLeft">
        <div className="LeftDescription">
          <span>Address: </span>
          <p> 6391 Elgin St. Celina, Delaware 10299</p>
        </div>
        <div className="LeftDescription">
          <span>Phone: </span>
          <p>+84 1102 2703</p>
        </div>
        <div className="LeftDescription">
          <span>Email: </span>
          <p>hello@thebox.com</p>
        </div>
        <div className="LeftLogo">
          <img src={website_logo} alt="Website logo" />
          <h1 className="Heading">
            <span>The</span>Box
          </h1>
        </div>
      </div>
      <div className="BottomRight">
        <span>Newsletter:</span>
        <div className="RightButtons">
          <input type="email" placeholder="Your email here" />
          <button>Subscribe</button>
        </div>
        <span>Social:</span>
        <div className="RightIcons">
          <img src={Icon_Fb} />
          <img src={Icon_Linkedin} />
          <img src={Icon_Twitter} />
        </div>
      </div>
    </div>
  );
}
