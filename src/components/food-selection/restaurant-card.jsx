import './food-selection.css';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// import Carousel from './carousel';
import { useState } from 'react';
import { Modal, Box } from '@mui/material';
import { EwsP } from 'components/common/typography/text-components';
import Carousel2 from './carousel2';

import ProductInformation from './product-information';
import Reviews from './reviews';

// {} extract out key for you. If it is individual elements you have to put {} but not if props
// props passes everything

const NUM_REVIEWS_TO_DISPLAY = 4;

function RestaurantCard({ restaurant }) {
    // API to call food list

    const [displayReviewModal, setDisplayReviewModal] = useState(undefined);

    const renderReviewModal = () => {
        if (!displayReviewModal) return null;
        return (
            <Modal
                open={!!displayReviewModal}
                onClose={() => { setDisplayReviewModal(undefined) }}
            >
                <Box
                    className="reviewModal"
                >
                    <EwsP>
                        Rating:&nbsp;
                        {displayReviewModal.rating}
                    </EwsP>
                    <EwsP>
                        {displayReviewModal.comment}
                    </EwsP>
                </Box>
            </Modal>
        )
    }

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
                    <Grid container item spacing={2}>
                        <Reviews
                            onClick={(review) => { setDisplayReviewModal(review) }}
                            reviews={restaurant.reviews.slice(0, NUM_REVIEWS_TO_DISPLAY)}
                        />
                    </Grid>
                </Grid>
                {renderReviewModal()}
            </Container>
        </>
    );
}

export default RestaurantCard;
