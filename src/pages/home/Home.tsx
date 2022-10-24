import React from "react";
import Navbar from "@components/navbar/Navbar";
import Header from "@components/header/Header";
import Reputation from "@components/reputation/Reputation";
import AboutUs from "@components/aboutUs/AboutUs";
import Services from "@components/services/Services";
import Experience from "@components/experience/Experience";
import Ad from "@components/ad/Ad";
import Projects from "@components/projects/Projects";
import Cta from "@components/cta/Cta";

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Reputation />
            <AboutUs />
            <Services />
            <Experience />
            <Ad />
            <Projects />
            <Cta />
        </div>
    );
};

export default Home;
