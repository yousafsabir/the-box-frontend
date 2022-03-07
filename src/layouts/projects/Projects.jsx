import React from 'react'
import Wild_Stone from '../../assets/images/img_wildstone.png'
import Wish_Stone from "../../assets/images/img_wish.png";
import Parkinstons from "../../assets/images/img_parkinstons.png";
import Oregano from "../../assets/images/img_oregano.png";
import Vector_Left from "../../assets/images/vector_left.png";
import Vector_Right from "../../assets/images/vector_right.png";
import './Projects.css'

export default function Projects() {
  return (
    <div className="ProjectsCont">
      <h2>Projects</h2>
      <div className="ProjectsGrid">
        <div className="Projects">
          <h3>All</h3>
          <h3>Commercial</h3>
          <h3>Resedential</h3>
          <h3>Other</h3>
          <div className="ProjectsBorder"></div>
        </div>
        <div className="Card Card1">
          <img src={Wild_Stone} />
          <div className="Description">
            <h4>Wildstone Infra Hotel</h4>
            <p>2715 Ash Dr. San Jose, South Dakota</p>
          </div>
        </div>
        <div className="Card Card2">
          <img src={Wish_Stone} />
          <div className="Description">
            <h4>Wish Stone Building</h4>
            <p>2972 Westheimer Rd. Santa Ana, Illinois</p>
          </div>
        </div>
        <div className="Card Card3">
          <img src={Parkinstons} />
          <div className="Description">
            <h4>Mr. Parkinston’s House</h4>
            <p>3517 W. Gray St. Utica, Pennsylvania</p>
          </div>
        </div>
        <div className="Card Card4">
          <img src={Oregano} />
          <div className="Description">
            <h4>Oregano Height</h4>
            <p>2464 Royal Ln. Mesa, New Jersey </p>
          </div>
        </div>
        <div className="ProjectsBottom">
          <div
            style={{ width: "1px", height: "1px", background: "transparent" }}
          ></div>
          <div className="BottomInner">
            <button>
              <img src={Vector_Left} />
              <p>Back</p>
            </button>
            <div className="BottomCircles">
              <div className="Circles"></div>
              <div className="Circles"></div>
              <div className="Circles"></div>
              <div className="Circles"></div>
              <div className="Circles"></div>
            </div>
            <button>
              <p>Next</p>
              <img src={Vector_Right} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
