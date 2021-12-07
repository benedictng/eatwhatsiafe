import './food-selection.css';

import Box from '@material-ui/core/Box';

// import Carousel from './carousel';
import Carousel2 from './carousel2';

import ProductInformation from './product-information';
import Reviews from './reviews';

// {} extract out key for you. If it is individual elements you have to put {} but not if props
// props passes everything

function RestaurantCard({ restaurant }) {
    // API to call food list

    return (
        <>
            <div className="card">
                <Box className="container" sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <Carousel2 photos={restaurant.photos} />
                    <Box className="text-description">
                        <ProductInformation
                            name={restaurant.name}
                            cuisineType={restaurant.cuisine_type}
                            restriction={restaurant.restrictions}
                            location={restaurant.region}
                            hours={restaurant.opening_hours}
                        />
                    </Box>
                </Box>
                <Box className="container" sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                    <Reviews reviews={restaurant.reviews} />
                </Box>
            </div>
        </>
    );
}

export default RestaurantCard;
