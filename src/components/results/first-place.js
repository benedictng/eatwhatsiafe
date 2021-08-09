import React from "react";

import Col from "react-bootstrap/Col";

import "./results.css";

//Class name image is in react bootstrap

const FirstPlace = ({ first_result }) => {
  return (
    <>
      <Col lg={6} className="horizontalcenter">
        <img
          className="image"
          src={first_result.food.photos[0]}
          alt="restaurant food"
        ></img>
      </Col>
      <Col lg={6}>
        <h2>{first_result.food.name}</h2>
        <h3>{first_result.food.address}</h3>
        <p>Who voted: {first_result.voted_users}</p>

        {/* {first_results.food.voted_users.map((voters, id) => (
          <h3>{voters}</h3>
        ))} */}
      </Col>
    </>
  );
};

export default FirstPlace;
