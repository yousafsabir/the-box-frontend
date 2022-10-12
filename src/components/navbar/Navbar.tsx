import React from "react";
import { MdMenu } from "react-icons/md";
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
                    <h1 className="text h5">
                        <span>The</span>Box
                    </h1>
                </div>
                <ul>
                    <li>
                        <a href="/" className="para-reg">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/" className="para-reg">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="/" className="para-reg">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="/" className="para-reg">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/" className="para-reg">
                            Contact Us
                        </a>
                    </li>
                </ul>
                <MdMenu className="menu" />
            </div>
        </nav>
    );
};

export default Navbar;
