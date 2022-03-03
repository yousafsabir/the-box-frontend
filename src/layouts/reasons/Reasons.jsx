import React from 'react'
import Services_Teams from '../../assets/images/icon_services_teams.png'
import Designs from '../../assets/images/icon_designs.png'
import './Reasons.css'

export default function Reasons() {
  return (
    <div className="ReasonsCont">
      <h2>Our Reputation</h2>
      <div className="ReasonsFlex">
        <div className="ReasonsCard Card1">
          <img src={Services_Teams} alt="Best Services" />
          <h3>Best Services</h3>
          <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
        </div>
        <div className="ReasonsCard Card2">
          <img src={Services_Teams} alt="Best Teams" />
          <h3>Best Teams</h3>
          <p>Cursus semper tellus volutpat aliquet lacus. </p>
        </div>
        <div className="ReasonsCard Card3">
          <img src={Designs} alt="Best Designs" />
          <h3>Best Designs</h3>
          <p>Ultricies at ipsum nunc, tristique nam lectus.</p>
        </div>
      </div>
    </div>
  );
}
