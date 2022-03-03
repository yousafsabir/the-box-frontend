import React from 'react'
import Vector_Left from '../../assets/images/vector_left.png'
import Vector_Right from "../../assets/images/vector_right.png";
import './Hero.css'

export default function Hero() {
  return (
    <div className="HeroContainer">
      <div className="HeroInner">
        <h1>Building things is our mission.</h1>
        <div></div>
      </div>
      <div className="AbsoluteBox">
        <h3>Feature Projects</h3>
        <p>The National University of</p>
        <p className='ForMargin'>Architecture</p>
        <div className="Bottom">
          <button>
            <img src={Vector_Left} alt="" />
            <p>Back</p>
          </button>
          <div className="BottomBorder"></div>
          <button>
            <p>Next</p>
            <img src={Vector_Right} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
