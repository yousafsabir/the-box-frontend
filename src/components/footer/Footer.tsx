import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <section className="container links">
                <div className="left">
                    <div className="info">
                        <div>
                            <p>Address:</p>
                            <p>6391 Elgin St. Celina, Delaware 10299</p>
                        </div>
                        <div>
                            <p>Phone:</p>

                            <p>+84 1102 2703</p>
                        </div>
                        <div>
                            <p>Email:</p>
                            <p>hello@thebox.com</p>
                        </div>
                    </div>
                    <div className="heading">
                        <img
                            src="/images/logo.svg"
                            alt="TheBox logo"
                            className="logo"
                        />
                        <h1 className="text h5">
                            <span>The</span>Box
                        </h1>
                    </div>
                </div>
                <div className="right">
                    <p>NEWSLETTER:</p>
                    <div className="footer-cta">
                        <input type="email" placeholder="Your Email Here" />
                        <button>Subscribe</button>
                    </div>
                    <p>SOCIALS:</p>
                    <div className="socials">
                        <a
                            href="https://facebook.com/yousafsabir07"
                            target={"_blank"}
                        >
                            <img
                                src="/images/icon-facebook.svg"
                                alt="link to facebook"
                            />
                        </a>
                        <a
                            href="https://linkedin.com/in/yousafsabir"
                            target={"_blank"}
                        >
                            <img
                                src="/images/icon-linkedin.svg"
                                alt="link to linkedin"
                            />
                        </a>
                        <a
                            href="https://twitter.com/yousafsabir7"
                            target={"_blank"}
                        >
                            <img
                                src="/images/icon-twitter.svg"
                                alt="link to twitter"
                            />
                        </a>
                    </div>
                </div>
            </section>
            <section className="copyright">
                <div className="container">
                    <p className="caption">
                        TheBox Company © 2022. All Rights Reserved
                    </p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
