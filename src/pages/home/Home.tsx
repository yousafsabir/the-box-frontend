import React from "react";
import Navbar from "@components/navbar/Navbar";
import Header from "@components/header/Header";
import Reputation from "@components/reputation/Reputation";
import AboutUs from "@components/aboutUs/AboutUs";
import Services from "@components/services/Services";

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Reputation />
            <AboutUs />
            <Services />
        </div>
    );
};

export default Home;
