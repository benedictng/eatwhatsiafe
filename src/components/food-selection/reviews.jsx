import Grid from '@mui/material/Grid';
import { EwsP } from 'components/common/typography/text-components';

const Reviews = ({ reviews, onClick }) => (
    <>
        {
            !reviews ? null
                : reviews.map((review, id) => (
                    <Grid key={id} item xs={12} md={3} onClick={() => { onClick(review) }}>
                        <div
                            className="review"
                        >
                            <EwsP>
                                Rating:&nbsp;
                                {review.rating}
                            </EwsP>
                            <EwsP mb={1}>{review.comment}</EwsP>

                        </div>
                    </Grid>
                ))
        }
    </>
);

export default Reviews;
