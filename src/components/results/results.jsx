import Container from 'react-bootstrap/Container';
import resultsData from './results-data';
import Message from './message';
import FirstPlace from './first-place';
import SecondPlace from './second-place';
import ThirdPlace from './third-place';

import './results.css';

const Results = () => (
    <>
        <div className="p-5 overflow">
            <Message isConclusive={resultsData.data.results_conclusive} />
        </div>
        <Container className="winnercard p-5">
            <FirstPlace first_result={resultsData.data.results[0]} />
        </Container>
        <Container className="winnercard p-5">
            <SecondPlace second_result={resultsData.data.results[1]} />
        </Container>
        <Container className="winnercard p-5">
            <ThirdPlace third_result={resultsData.data.results[2]} />
        </Container>
        <Container />
    </>
);

export default Results
