const Reviews = ({ reviews }) => (
    <>
        {
            reviews.map((review, id) => (
                <div className="review" key={id}>
                    <p>
                        Rating:
                        {review.rating}
                    </p>
                    <p>{review.comment}</p>

                </div>
            ))

        }

    </>
);

export default Reviews;
