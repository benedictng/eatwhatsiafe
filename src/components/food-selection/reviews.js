
import Col from "react-bootstrap/Col";

const Reviews = ({reviews}) => {

  return (
    <>
      {
        reviews.map((review,id)=> (
          <Col xs={12} md={3} key={id}>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </Col>
          )
        )
      
      }

    </>
  );
};

export default Reviews;
