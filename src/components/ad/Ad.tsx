import React from "react";
import "./Ad.scss";

const Ad: React.FC = () => {
    return (
        <section className="ad-section">
            <div className="container">
                <div className="text">
                    <h2 className="h4">
                        Free consultation with exceptional quality
                    </h2>
                    <p className="para-lg">
                        Just one call away: <span>+84 1102 2703</span>
                    </p>
                </div>
                <div className="cta">
                    <button className="para-reg">Get your consultation</button>
                </div>
            </div>
        </section>
    );
};

export default Ad;
