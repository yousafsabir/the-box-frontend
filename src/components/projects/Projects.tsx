import React from "react";
import "./Projects.scss";

const Projects = () => {
    return (
        <section className="projects">
            <div className="container">
                <h2 className="h4">Projects</h2>
                <div className="layout-container">
                    <nav>
                        <div className="nav-element">
                            <div></div>
                            <p className="para-lg">All</p>
                        </div>
                        <div className="nav-element">
                            <div></div>
                            <p className="para-lg">Commercial</p>
                        </div>
                        <div className="nav-element">
                            <div></div>
                            <p className="para-lg">Residential</p>
                        </div>
                        <div className="nav-element">
                            <div></div>
                            <p className="para-lg">Other</p>
                        </div>
                    </nav>
                    <div className="card-grid">
                        <div className="card-container">
                            <div className="card">
                                <img
                                    src="/images/project-wildstone.jpg"
                                    alt=""
                                />
                                <div className="card-content">
                                    <h3 className="para-md">
                                        Wildstone Infra Hotel
                                    </h3>
                                    <p className="para-reg">
                                        2715 Ash Dr. San Jose, South Dakota
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img
                                    src="/images/project-wishstone.jpg"
                                    alt=""
                                />
                                <div className="card-content">
                                    <h3 className="para-md">
                                        Wish Stone Building
                                    </h3>
                                    <p className="para-reg">
                                        2972 Westheimer Rd. Santa Ana, Illinois
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-container">
                            <div className="card">
                                <img
                                    src="/images/project-parkinston.jpg"
                                    alt=""
                                />
                                <div className="card-content">
                                    <h3 className="para-md">
                                        Mr. Parkinston’s House
                                    </h3>
                                    <p className="para-reg">
                                        3517 W. Gray St. Utica, Pennsylvania
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="/images/project-oregano.jpg" alt="" />
                                <div className="card-content">
                                    <h3 className="para-md">Oregano Height</h3>
                                    <p className="para-reg">
                                        2464 Royal Ln. Mesa, New Jersey{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="circle-container below520">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <nav>
                            <button className="para-reg">
                                <svg
                                    width="27"
                                    height="18"
                                    viewBox="0 0 27 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M26.5 9C26.5 8.74955 26.4022 8.50936 26.228 8.33227C26.0539 8.15518 25.8177 8.05569 25.5715 8.05569L3.6716 8.05569L9.51566 2.11408C9.60198 2.02628 9.67047 1.92205 9.71719 1.80733C9.76391 1.69262 9.78796 1.56967 9.78796 1.4455C9.78796 1.32134 9.76391 1.19839 9.71719 1.08368C9.67047 0.968962 9.60198 0.86473 9.51566 0.776931C9.42933 0.689133 9.32684 0.619488 9.21405 0.571972C9.10125 0.524456 8.98036 0.5 8.85827 0.5C8.73618 0.5 8.61529 0.524456 8.50249 0.571972C8.3897 0.619488 8.28721 0.689133 8.20088 0.776932L0.772785 8.33143C0.686316 8.41914 0.617712 8.52335 0.570903 8.63808C0.524094 8.7528 0.5 8.87579 0.5 9C0.5 9.12421 0.524094 9.2472 0.570903 9.36192C0.617712 9.47665 0.686316 9.58085 0.772785 9.66857L8.20088 17.2231C8.28721 17.3109 8.3897 17.3805 8.50249 17.428C8.61529 17.4755 8.73618 17.5 8.85827 17.5C8.98036 17.5 9.10125 17.4755 9.21405 17.428C9.32684 17.3805 9.42933 17.3109 9.51566 17.2231C9.60198 17.1353 9.67047 17.031 9.71719 16.9163C9.76391 16.8016 9.78795 16.6787 9.78795 16.5545C9.78795 16.4303 9.76391 16.3074 9.71719 16.1927C9.67047 16.078 9.60198 15.9737 9.51566 15.8859L3.6716 9.94431L25.5715 9.94431C25.8177 9.94431 26.0539 9.84482 26.228 9.66773C26.4022 9.49064 26.5 9.25045 26.5 9Z"
                                        fill="white"
                                    />
                                </svg>
                                <span>Back</span>
                            </button>
                            <div className="circle-container above520">
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                            <button className="para-reg">
                                <span>Next</span>
                                <svg
                                    width="26"
                                    height="18"
                                    viewBox="0 0 26 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M-1.15156e-06 9C-1.17383e-06 9.25045 0.0978229 9.49063 0.271952 9.66773C0.446082 9.84482 0.682254 9.94431 0.928509 9.94431L22.8284 9.94431L16.9843 15.8859C16.898 15.9737 16.8295 16.078 16.7828 16.1927C16.7361 16.3074 16.712 16.4303 16.712 16.5545C16.712 16.6787 16.7361 16.8016 16.7828 16.9163C16.8295 17.031 16.898 17.1353 16.9843 17.2231C17.0707 17.3109 17.1732 17.3805 17.286 17.428C17.3987 17.4755 17.5196 17.5 17.6417 17.5C17.7638 17.5 17.8847 17.4755 17.9975 17.428C18.1103 17.3805 18.2128 17.3109 18.2991 17.2231L25.7272 9.66857C25.8137 9.58086 25.8823 9.47665 25.9291 9.36192C25.9759 9.2472 26 9.12421 26 9C26 8.87579 25.9759 8.7528 25.9291 8.63808C25.8823 8.52335 25.8137 8.41915 25.7272 8.33143L18.2991 0.776933C18.2128 0.689136 18.1103 0.619489 17.9975 0.571973C17.8847 0.524457 17.7638 0.500001 17.6417 0.500001C17.5196 0.500001 17.3988 0.524457 17.286 0.571973C17.1732 0.619489 17.0707 0.689136 16.9843 0.776933C16.898 0.864732 16.8295 0.968963 16.7828 1.08368C16.7361 1.19839 16.712 1.32134 16.712 1.4455C16.712 1.56967 16.7361 1.69262 16.7828 1.80734C16.8295 1.92205 16.898 2.02628 16.9843 2.11408L22.8284 8.05569L0.92851 8.05569C0.682254 8.05569 0.446082 8.15518 0.271952 8.33227C0.097823 8.50936 -1.1293e-06 8.74955 -1.15156e-06 9Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
