import Col from 'react-bootstrap/Col';
import './results.css';

// Class name image is in react bootstrap

const FirstPlace = ({ first_result }) => (
    <>
        <Col lg={6} className="horizontalcenter">
            <img
                className="results_image"
                src={first_result.food.photos[0]}
                alt="restaurant food"
            />
        </Col>
        <Col lg={6}>
            <h1>Yall should eat at:</h1>
            <br />
            <h2>{first_result.food.name}</h2>
            <h3>{first_result.food.address}</h3>
            <p>
                Who voted:
                {first_result.voted_users}
            </p>
            <br />
            <button type="button">Share</button>

            {/* {first_results.food.voted_users.map((voters, id) => (
          <h3>{voters}</h3>
        ))} */}
        </Col>
    </>
);

export default FirstPlace;