import './food-selection.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Carousel from './carousel';
import ProductInformation from './product-information';
import Reviews from './reviews';
import Tags from './tags';

// {} extract out key for you. If it is individual elements you have to put {} but not if props
// props passes everything

function RestaurantCard({ restaurant }) {
    // API to call food list

    return (
        <>
            <Container>
                <Col>
                    <Row>
                        <Carousel slides={restaurant.photos} />
                    </Row>
                    <Row>
                        <Tags
                            cuisineType={restaurant.cuisine_type}
                            restriction={restaurant.restrictions}
                        />
                    </Row>
                </Col>
                <Col>
                    <ProductInformation
                        name={restaurant.name}
                        // hours = {restaurant.opening_hours}
                        // price = {} price not available*****
                        address={restaurant.address}
                        location={restaurant.region}
                        hours={restaurant.opening_hours}
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
