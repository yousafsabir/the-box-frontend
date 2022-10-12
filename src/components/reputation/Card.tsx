import React from "react";
import "./Card.scss";

interface Props {
    image: string;
    title: string;
    caption: string;
}

const Card: React.FC<Props> = ({ image, title, caption }) => {
    return (
        <article className="reputation-card">
            <img src={image} alt="card images" />
            <h3 className="para-md heading">{title}</h3>
            <p className="caption para">{caption}</p>
        </article>
    );
};

export default Card;
