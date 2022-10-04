import { useEffect, useState } from 'react'
import RoomAPI from 'api/room'
import { useHistory, useParams } from 'react-router-dom'
import Loading from 'components/common/loading'
import Status from 'components/room-status'
import Results from 'components/results/results'
import GetName from 'components/common/get-name'
import { EwsH1, EwsP } from 'components/common/typography/text-components'
import RoomDeleted from './room-deleted'

const Room = () => {
    const { roomCode } = useParams()
    const [status, setStatus] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const [data, setData] = useState({})
    const [name, setName] = useState(window.sessionStorage.getItem('name'))
    const history = useHistory()

    useEffect(() => {
        RoomAPI.getRoomStatus({
            room_code: roomCode,
        }).then((res) => {
            if (res.error_code === 0) {
                setData(res.data)
                setStatus(res.data.status)
            } else {
                setStatus(res.error_code)
                setErrorMsg(res.error_msg)
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
            setTimeout(() => restart(), 2000)
            return (
                <>
                    <EwsH1>Error occurred, restarting..</EwsH1>
                    <EwsP>{errorMsg}</EwsP>
                </>
            )
        }
    }

    return (
        <>
            { renderRoom() }
        </>
    )
}

export default Room
