import './food-selection.css';

import Grid from '@material-ui/core/Grid';
import Container from '@mui/material/Container';

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
            <Container className="card">
                <Grid container className="container" spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Carousel2 photos={restaurant.photos} />
                    </Grid>

                    <Grid item xs={12} md={6} className="text-description">
                        <ProductInformation
                            name={restaurant.name}
                            cuisineType={restaurant.cuisine_type}
                            restriction={restaurant.restrictions}
                            location={restaurant.region}
                            hours={restaurant.opening_hours}
                        />
                    </Grid>
                    <Grid container spacing={2}>
                        <Reviews reviews={restaurant.reviews} />
                    </Grid>
                </Grid>

            </Container>
        </>
    );
}

export default RestaurantCard;
