import React from "react";
import "./Services.scss";
import Card from "./Card";

const Services: React.FC = () => {
    interface Data {
        image: string;
        title: string;
    }
    const data: Data[] = [
        {
            image: "/images/service-construction.svg",
            title: "Construction",
        },
        {
            image: "/images/service-renovation.svg",
            title: "Renovation",
        },
        {
            image: "/images/service-consultation.svg",
            title: "Consultation",
        },
        {
            image: "/images/service-repair.svg",
            title: "Repair Services",
        },
        {
            image: "/images/service-architecture.svg",
            title: "Architecture",
        },
        {
            image: "/images/service-electric.svg",
            title: "Electric",
        },
    ];
    return (
        <section className="services">
            <div className="container-sm">
                <h2 className="h4">Services</h2>
                <div className="card-container">
                    {data.map((item, i) => {
                        return (
                            <Card
                                image={item.image}
                                title={item.title}
                                blue={i % 2 !== 0}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
