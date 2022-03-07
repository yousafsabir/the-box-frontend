import React from 'react'
import './Ad.css'

export default function Ad() {
  return (
    <div className="AdCont">
      <div className="InnerAd">
        <div className="AdLeft">
          <h2>Free consultation with exceptional quality</h2>
          <p>Just one call away: +84 1102 2703</p>
        </div>
        <div className="AdRight">
          <button>Get your Consultation</button>
        </div>
      </div>
    </div>
  );
}
