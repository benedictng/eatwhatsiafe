import Container from '@material-ui/core/Container';
import RoomAPI from 'api/room'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Loading from 'components/common/loading';
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
            setAllData(res.data)
            setLoaded(true)
        })
    }, [])

    function renderContentOrLoading() {
        if (loaded) {
            return (
                <Container>
                    <div className="p-5 overflow">
                        <Message isConclusive={allData.results_conclusive} />
                    </div>
                    <div className="results">
                        <div className="winnercard">
                            <FirstPlace firstResult={allData.results[0]} />
                        </div>
                        <div className="winnercard">
                            <SecondPlace secondResult={allData.results[1]} />
                        </div>
                        <div className="winnercard">
                            <ThirdPlace thirdResult={allData.results[2]} />
                        </div>
                    </div>
                </Container>
            )
        }
        return <Loading />
    }

    return <>{renderContentOrLoading()}</>;
}

export default Results;
