import React from "react";
import { useParams } from "react-router-dom";

const Hero = ({ hero }) => {
    const { id } = useParams();
    return (
        <div className="hero-container">
            <h1>{id}</h1>
            <h1>{hero.name}</h1>
        </div>
    );
};

export { Hero };