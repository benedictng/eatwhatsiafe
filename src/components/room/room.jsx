import RoomAPI from 'api/room'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from 'components/common/loading'
import Status from 'components/room-status'
import Results from 'components/results/results'

const Room = () => {
    const { roomCode } = useParams()
    const [status, setStatus] = useState(null)
    const [data, setData] = useState({})

    useEffect(() => {
        alert(status)
        RoomAPI.getRoomStatus({
            room_code: roomCode,
        }).then((res) => {
            setData(res.data.data)
            setStatus(res.data.data.status)
            alert(status)
        })
    }, [roomCode])

    switch (status) {
    case null:
        return <Loading />
    case 1:
        return <Status roomData={data} />
    case 2:
        return <Results />
    default:
        return <h1>ERROR</h1>
    }
}

export default Room
