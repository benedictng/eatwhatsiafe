import { reviewData } from "./reviewData";
import Col from "react-bootstrap/Col";

const Reviews = () => {
  return (
    <>
      {reviewData.map((onereview) => {
        const { id, review } = onereview;
        return (
          <Col xs={12} md={3} key={id}>
            <p>{review}</p>
          </Col>
        );
      })}
    </>
  );
};

export default Reviews;
