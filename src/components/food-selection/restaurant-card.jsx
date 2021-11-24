import './food-selection.css';

import Container from 'react-bootstrap/Container';
import Box from '@material-ui/core/Box';

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
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <Carousel slides={restaurant.photos} />
                    <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
                        <ProductInformation
                            name={restaurant.name}
                        />
                        <Tags
                            cuisineType={restaurant.cuisine_type}
                            restriction={restaurant.restrictions}
                        />
                        <ProductInformation
                            address={restaurant.address}
                            location={restaurant.region}
                            hours={restaurant.opening_hours}
                        />
                    </Box>
                </Box>
            </Container>

            <Container>
                <Reviews reviews={restaurant.reviews} />
            </Container>
        </>
    );
}

export default RestaurantCard;
