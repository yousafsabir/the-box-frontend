import React from 'react'
import './AdStyle.css'

export default function Ad() {
  return (
    <div className="AdCont">
      <div className="AdLeft">
        <h2>Free consultation with exceptional quality</h2>
        <p>
          Just one call away: <span>+84 1102 2703</span>
        </p>
      </div>
      <button>Get your consultation</button>
    </div>
  );
}
