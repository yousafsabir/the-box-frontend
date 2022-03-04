import React from 'react'
import Icon_Constructoin from '../../assets/images/icon_construction.png'
import Icon_Renovation from "../../assets/images/icon_renovation.png";
import Icon_Consultation from "../../assets/images/icon_consultation.png";
import Icon_Repair from "../../assets/images/icon_repair.png";
import './Services.css'
import Icon_Archicture from "../../assets/images/icon_architecture.png";
import Icon_Electricity from "../../assets/images/icon_electricity.png";
export default function Services() {
  return (
    <div className="ServicesCont">
      <h2>Services</h2>
      <div className="ServicesGrid">
        <div className="ServicesCard WhiteCard">
          <img src={Icon_Constructoin} alt="Constructoin" />
          <div className="ServicesBorder"></div>
          <h3>Construction</h3>
        </div>
        <div className="ServicesCard BlueCard">
          <img src={Icon_Renovation} alt="Constructoin" />
          <div className="ServicesBorder"></div>
          <h3>Renovation</h3>
        </div>
        <div className="ServicesCard WhiteCard">
          <img src={Icon_Consultation} alt="Constructoin" />
          <div className="ServicesBorder"></div>
          <h3>Consultation</h3>
        </div>
        <div className="ServicesCard BlueCard">
          <img src={Icon_Repair} alt="Constructoin" />
          <div className="ServicesBorder"></div>
          <h3>Repair Services</h3>
        </div>
        <div className="ServicesCard WhiteCard">
          <img src={Icon_Archicture} alt="Constructoin" />
          <div className="ServicesBorder"></div>
          <h3>Archicture</h3>
        </div>
        <div className="ServicesCard BlueCard">
          <img src={Icon_Electricity} alt="Constructoin" />
          <div className="ServicesBorder"></div>
          <h3>Electricity</h3>
        </div>
      </div>
    </div>
  );
}
