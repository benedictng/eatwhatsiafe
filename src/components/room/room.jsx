import { useEffect, useState } from 'react'
import RoomAPI from 'api/room'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import Loading from 'components/common/loading'
import Status from 'components/room-status'
import Results from 'components/results/results'
import GetName from 'components/common/get-name'
import { EwsH1 } from 'components/common/typography/text-components'
import RoomDeleted from './room-deleted'

const Room = () => {
    const { roomCode } = useParams()
    const [status, setStatus] = useState(null)
    const [data, setData] = useState({})
    const [name, setName] = useState(window.sessionStorage.getItem('name'))
    const location = useLocation()
    const history = useHistory()

    useEffect(() => {
        RoomAPI.getRoomStatus({
            room_code: roomCode,
        }).then((res) => {
            if (location.state
                && Object.prototype.hasOwnProperty.call(location.state, 'create_room')
                && location.state.create_room) {
                setTimeout(() => {
                    setData(res.data)
                    setStatus(res.data.status)
                }, 5000)
            } else {
                setData(res.data)
                setStatus(res.data.status)
            }
        })
    }, [])

    const submitName = (newName) => {
        window.sessionStorage.setItem('name', newName)
        setName(newName)
    }

    const restart = () => {
        setName(null)
        setStatus(null)
        setData({})
        history.push('/')
    }

    const renderRoom = () => {
        switch (status) {
        case null:
            return <Loading />
        case 1: // active
            if (name == null) {
                return <GetName onSubmit={submitName} />
            }
            return <Status roomData={data} />
        case 2: // closed
            return <Results />
        case 3: // deleted
            return <RoomDeleted restart={restart} roomCode={roomCode} />
        default: // error
            alert(status)
            setTimeout(() => restart(), 1500)
            return <EwsH1>Error occurred, restarting..</EwsH1>
        }
    }

    return (
        <>
            { renderRoom() }
        </>
    )
}

export default Room
