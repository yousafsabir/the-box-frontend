import React from "react";
import "./AboutUs.scss";

const AboutUs: React.FC = () => {
    return (
        <section className="about-us">
            <div className="container">
                <div className="portrait">
                    <img src="/images/portrait.jpg" alt="leader's-portrait" />
                </div>
                <div className="text">
                    <h3 className="h4">About Us</h3>
                    <p className="para-md">
                        For more than 30 years we have been delivering
                        world-class construction and we’ve built many lasting
                        relationships along the way.
                    </p>
                    <p className="para-md">
                        We’ve matured into an industry leader and trusted
                        resource for those seeking quality, innovation and
                        reliability when building in the U.S.
                    </p>
                    <button className="para-reg">More on Our History</button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
