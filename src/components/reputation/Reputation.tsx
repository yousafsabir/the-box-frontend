import React from "react";
import Card from "./Card";
import "./Reputation.scss";

const Reputation: React.FC = () => {
    interface Data {
        image: string;
        title: string;
        caption: string;
    }
    const data: Data[] = [
        {
            image: "/images/icon-support.svg",
            title: "Best Services",
            caption:
                "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
        },
        {
            image: "/images/icon-support.svg",
            title: "Best Teams",
            caption: "Cursus semper tellus volutpat aliquet lacus.",
        },
        {
            image: "/images/icon-pencil-scale.svg",
            title: "Best Designs",
            caption: "Ultricies at ipsum nunc, tristique nam lectus.",
        },
    ];
    return (
        <section className="reputation">
            <div className="container-sm">
                <h2 className="h4">Our Reputation</h2>
                <div className="card-container">
                    {data.map((item, i) => {
                        return (
                            <Card
                                image={item.image}
                                title={item.title}
                                caption={item.caption}
                                key={i}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Reputation;
