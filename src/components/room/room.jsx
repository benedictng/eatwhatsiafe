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
        RoomAPI.getRoomStatus({
            room_code: roomCode,
        }).then((res) => {
            alert(JSON.stringify(res))
            alert(JSON.stringify(res.data))
            console.log(JSON.stringify(res.data))
            setData(res.data)
            setStatus(res.data.status)
        })
    }, [roomCode])

    const renderRoom = () => {
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

    return (
        <>
            { renderRoom() }
        </>
    )
}

export default Room
