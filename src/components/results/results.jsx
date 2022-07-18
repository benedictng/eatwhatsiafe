import Container from '@mui/material/Container';
import RoomAPI from 'api/room'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Loading from 'components/common/loading';
import Message from './message';
import WinnerCard from './winner-card';

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
    }, [roomCode])

    function renderContentOrLoading() {
        if (loaded) {
            return (
                <Container>
                    <div className="message-container">
                        <Message isConclusive={allData.results_conclusive} />
                    </div>
                    <div>
                        <div className="winner-card">
                            <WinnerCard result={allData.results[0]} placing={1} />
                        </div>
                        <div className="winner-card">
                            <WinnerCard result={allData.results[1]} placing={2} />
                        </div>
                        <div className="winner-card">
                            <WinnerCard result={allData.results[2]} placing={3} />
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
