import { useParams } from 'react-router-dom'


// TODO remove me after replacing with actual status page
const DummyRoomStatus = () => {
    const { roomCode } = useParams()

    return (
        <div>I am in room {roomCode}</div>
    )
}

export default DummyRoomStatus
