import "./food-selection.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Carousel from "./carousel";
import ProductInformation from "./product-information";
import Reviews from "./reviews";
import Tags from "./tags";

import React from "react";

//{} extract out key for you. If it is individual elements you have to put {} but not if props
//props passes everything

function RestaurantCard({ restaurant }) {
  //API to call food list

  restaurant.reviews.map((review, id) => (
    <Reviews key={id} review={review}></Reviews>
  ));

  return (
    <>
      <Container>
        <Col>
          <Row>
            <Carousel slides={restaurant.photos} />
          </Row>
          <Row>
            <Tags />
          </Row>
        </Col>
        <Col>
          <ProductInformation
            name={restaurant.name}
            // hours = {restaurant.opening_hours}
            // price = {} price not available*****
            address={restaurant.address}
            mrt={restaurant.nearest_mrt}
          />
        </Col>
      </Container>

      <Container>
        <Reviews reviews={restaurant.reviews} />
      </Container>
    </>
  );
}

export default RestaurantCard;
