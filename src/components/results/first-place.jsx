import Col from 'react-bootstrap/Col';
import './results.css';

// Class name image is in react bootstrap

const FirstPlace = ({ firstResult }) => (
    <>
        <Col lg={6} className="horizontalcenter">
            <img
                className="results_image"
                src={firstResult.food.photos[0]}
                alt="restaurant food"
            />
        </Col>
        <Col lg={6}>
            <h1>Yall should eat at:</h1>
            <br />
            <h2>{firstResult.food.name}</h2>
            <h3>{firstResult.food.address}</h3>
            <p>
                Who voted:
                {firstResult.voted_users}
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
