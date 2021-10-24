import React from 'react';
import Col from 'react-bootstrap/Col';
import './results.css';

// Class name image is in react bootstrap

const ThirdPlace = ({ third_result }) => (
    <>
        <Col lg={6} className="horizontalcenter">
            <img
                className="results_image_others"
                src={third_result.food.photos[0]}
                alt="restaurant food"
            />
        </Col>
        <Col lg={6}>
            <h1>In third place...</h1>
            <br />
            <h2>{third_result.food.name}</h2>
            <h3>{third_result.food.address}</h3>
            <p>
                Who voted:
                {third_result.voted_users}
            </p>
        </Col>
    </>
);

export default ThirdPlace;