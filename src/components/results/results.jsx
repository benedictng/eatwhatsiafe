import Container from '@material-ui/core/Container';
import RoomAPI from 'api/room'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Message from './message';
import FirstPlace from './first-place';
import SecondPlace from './second-place';
import ThirdPlace from './third-place';

import './results.css';

const Results = () => {
    const [loaded, setLoaded] = useState(false);
    const [allData, setAllData] = useState({});
    const { roomCode } = useParams()

    useEffect(() => {
        RoomAPI.getRoomResults({
            room_code: roomCode,
        }).then((res) => {
            alert(`received response: ${JSON.stringify(res)}`)
            setAllData(res.data)
            setLoaded(true)
        })
    }, [])

    function renderContentOrLoading() {
        if (loaded) {
            return (
                <>
                    <div className="p-5 overflow">
                        <Message isConclusive={allData.results_conclusive} />
                    </div>
                    <Container className="results">
                        <Container className="winnercard p-5">
                            <FirstPlace firstResult={allData.results[0]} />
                        </Container>
                        <Container className="winnercard p-5">
                            <SecondPlace secondResult={allData.results[1]} />
                        </Container>
                        <Container className="winnercard p-5">
                            <ThirdPlace thirdResult={allData.results[2]} />
                        </Container>
                    </Container>
                </>
            )
        }
        return <p>Loading...</p>;
    }

    return <>{renderContentOrLoading()}</>;
}

export default Results;
