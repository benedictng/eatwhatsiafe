import "./food-selection.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Carousel from "./carousel";
import ProductInformation from "./productInformation";
import Reviews from "./reviews";
import Tags from "./tags";

import { carouselData } from "./carouselData";

function FoodSelectionPage() {
  return (
    <>
      <Container>
        <Col>
          <Row>
            <Carousel slides={carouselData} />
          </Row>
          <Row>
            <Tags />
          </Row>
        </Col>
        <Col>
          <ProductInformation />
        </Col>
      </Container>

      <Container>
        <Reviews />
      </Container>
    </>
  );
}

export default FoodSelectionPage;
