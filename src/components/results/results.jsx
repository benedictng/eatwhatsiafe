import Container from '@material-ui/core/Container';
import RoomAPI from 'api/room'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import resultsData from './results-data';
import Message from './message';
import FirstPlace from './first-place';
import SecondPlace from './second-place';
import ThirdPlace from './third-place';

import './results.css';

const Results = () => {
    const { roomCode } = useParams()
    let results = []
    useEffect(() => {
        RoomAPI.getRoomResults({
            room_code: roomCode,
        }).then((res) => {
            alert(`received response: ${JSON.stringify(res)}`)
            results = res.data.results
        })
    }, [])

    return (
        <>
            <div className="p-5 overflow">
                <Message isConclusive={resultsData.data.results_conclusive} />
            </div>
            <Container className="results">
                <Container className="winnercard p-5">
                    <FirstPlace firstResult={results[0]} />
                </Container>
                <Container className="winnercard p-5">
                    <SecondPlace secondResult={results[1]} />
                </Container>
                <Container className="winnercard p-5">
                    <ThirdPlace thirdResult={results[2]} />
                </Container>
            </Container>
        </>
    )
}

export default Results;
