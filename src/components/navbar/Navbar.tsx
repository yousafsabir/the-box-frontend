import React from "react";
import "./Navbar.scss";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="heading">
                    <img
                        src="/images/logo.svg"
                        alt="TheBox logo"
                        className="logo"
                    />
                    <h1 className="text">
                        <span>The</span>Box
                    </h1>
                </div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About Us</a>
                    </li>
                    <li>
                        <a href="/">Projects</a>
                    </li>
                    <li>
                        <a href="/">Services</a>
                    </li>
                    <li>
                        <a href="/">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
