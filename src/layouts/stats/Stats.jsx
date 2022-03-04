import React from 'react'
import './Stats.css'

export default function Stats() {
  return (
    <div className="StatsCont">
      <div></div>
      <div></div>
      <div className="InnerStats">
        <h2>30 Years Experience</h2>
        <p>
          Our company has been the leading provided construction services to
          clients throughout the USA since 1988.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="AbsoluteStats Stats1">
        <h2>123</h2>
        <div className="InnerAbsolute">
          <div className="StatsBorder"></div>
          <p>Projects Completed</p>
        </div>
      </div>
      <div className="AbsoluteStats Stats2">
        <h2>84</h2>
        <div className="InnerAbsolute">
          <div className="StatsBorder"></div>
          <p>Happy Clients</p>
        </div>
      </div>
      <div className="AbsoluteStats Stats3">
        <h2>37</h2>
        <div className="InnerAbsolute">
          <div className="StatsBorder"></div>
          <p>Awards Win</p>
        </div>
      </div>
      <div className="AbsoluteStats Stats4">
        <h2>30</h2>
        <div className="InnerAbsolute">
          <div className="StatsBorder"></div>
          <p>Years in Business</p>
        </div>
      </div>
    </div>
  );
}
