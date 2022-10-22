import React from "react";
import "./Experience.scss";

const Experience: React.FC = () => {
    return (
        <section className="experience">
            <div className="container">
                <div className="stats">
                    <div className="card">
                        <h3 className="h1">84</h3>
                        <div className="card-text">
                            <div></div>
                            <p className="para-lg">Happy Clients</p>
                        </div>
                        <img src="/images/exp1.svg" alt="" />
                    </div>
                    <div className="card">
                        <h3 className="h1">123</h3>
                        <div className="card-text">
                            <div></div>
                            <p className="para-lg">Projects Completed</p>
                        </div>
                        <img src="/images/exp2.svg" alt="" />
                    </div>
                    <div className="card">
                        <h3 className="h1">37</h3>
                        <div className="card-text">
                            <div></div>
                            <p className="para-lg">Award Win</p>
                        </div>
                        <img src="/images/exp3.svg" alt="" />
                    </div>
                    <div className="card">
                        <h3 className="h1">30</h3>
                        <div className="card-text">
                            <div></div>
                            <p className="para-lg">Years in Business</p>
                        </div>
                        <img src="/images/exp4.svg" alt="" />
                    </div>
                    {/* <img src="/images/Stats.png" alt="" /> */}
                </div>
                <div className="text">
                    <h2 className="h2">30 Years Experience</h2>
                    <p className="para-md">
                        Our company has been the leading provided construction
                        services to clients throughout the USA since 1988.
                    </p>
                    <button className="para-reg">Contact Us</button>
                </div>
            </div>
        </section>
    );
};

export default Experience;
