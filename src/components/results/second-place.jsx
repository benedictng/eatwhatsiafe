import React from 'react';
import Col from 'react-bootstrap/Col';
import './results.css';

// Class name image is in react bootstrap

const SecondPlace = ({ secondResult }) => (
    <>
        <Col lg={6} className="horizontalcenter">
            <img
                className="results_image_others"
                src={secondResult.food.photos[0]}
                alt="restaurant food"
            />
        </Col>
        <Col lg={6}>
            <h1>In second place...</h1>
            <br />
            <h2>{secondResult.food.name}</h2>
            <h3>{secondResult.food.address}</h3>
            <p>
                Who voted:
                {secondResult.voted_users}
            </p>
        </Col>
    </>
);

export default SecondPlace;
