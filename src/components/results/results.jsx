import Container from '@material-ui/core/Container';

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
        <Container className="results">
            <Container className="winnercard p-5">
                <FirstPlace firstResult={resultsData.data.results[0]} />
            </Container>
            <Container className="winnercard p-5">
                <SecondPlace secondResult={resultsData.data.results[1]} />
            </Container>
            <Container className="winnercard p-5">
                <ThirdPlace thirdResult={resultsData.data.results[2]} />
            </Container>
        </Container>
    </>
);

export default Results;
