import Grid from '@material-ui/core/Grid';

const Reviews = ({ reviews }) => (
    <>
        {
            reviews.map((review, id) => (
                <Grid item xs={12} md={3}>
                    <div
                        className="review"
                        key={id}
                    >
                        <p>
                            Rating:
                            {review.rating}
                        </p>
                        <p>{review.comment}</p>

                    </div>
                </Grid>

            ))

        }

    </>
);

export default Reviews;
