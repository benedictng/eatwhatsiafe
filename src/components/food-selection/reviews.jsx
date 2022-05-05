import Grid from '@material-ui/core/Grid';

const Reviews = ({ reviews, onClick }) => (
    <>
        {
            !reviews ? null
                : reviews.map((review, id) => (
                    <Grid key={id} item xs={12} md={3} onClick={() => { onClick(review) }}>
                        <div
                            className="review"
                        >
                            <p>
                                Rating:&nbsp;
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
