import "./food-selection.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Carousel from "./carousel";
import ProductInformation from "./productInformation";
import Reviews from "./reviews";
import Tags from "./tags";


import { allData } from "./allData";

function FoodSelectionPage() {
  return (
    <>
      <Container>
        <Col>
          <Row>
            <Carousel photos={allData.data[0].photos}
            
            />
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
