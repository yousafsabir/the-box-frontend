import React from "react";
import "./Card.scss";

interface Props {
    image: string;
    title: string;
    blue?: boolean;
}

const Card: React.FC<Props> = ({ image, title, blue = false }) => {
    return (
        <article className={"service-card"}>
            <img src={image} alt="" />
            <div className="line"></div>
            <h3 className="para-md">{title}</h3>
        </article>
    );
};

export default Card;
