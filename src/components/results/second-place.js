import React from "react";
import Col from "react-bootstrap/Col";
import "./results.css";

//Class name image is in react bootstrap

const SecondPlace = ({ second_result }) => {
    return (
        <>
            <Col lg={6} className="horizontalcenter">
                <img
                    className="results_image_others"
                    src={second_result.food.photos[0]}
                    alt="restaurant food"
                ></img>
            </Col>
            <Col lg={6}>
                <h1>In second place...</h1>
                <br></br>
                <h2>{second_result.food.name}</h2>
                <h3>{second_result.food.address}</h3>
                <p>Who voted: {second_result.voted_users}</p>
            </Col>
        </>
    );
};

export default SecondPlace;
