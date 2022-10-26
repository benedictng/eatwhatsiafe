import React, { useEffect, useState } from 'react'
import RoomAPI from 'api/room'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import Loading from 'components/common/loading'
import Status from 'components/room-status'
import Results from 'components/results/results'
import GetName from 'components/common/get-name'
import { EwsH1, EwsP } from 'components/common/typography/text-components'
import { RoomStatusData } from 'api/room/room_api_interface'
import RoomDeleted from './room-deleted'

interface LocationState {
    create: boolean
}

const initialRoomStatusData: RoomStatusData = {
    room_name: '', status: 0, voted_users: [], host_username: '',
}

const Room: React.FC = () => {
    const { roomCode } = useParams<{ roomCode: string }>()
    const [status, setStatus] = useState<number | null>(null)
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [data, setData] = useState<RoomStatusData>(initialRoomStatusData)
    const [name, setName] = useState<string | null>(window.sessionStorage.getItem('name'))
    const location = useLocation<LocationState>()
    const history = useHistory()

    useEffect(() => {
        RoomAPI.getRoomStatus({
            room_code: roomCode,
        }).then((res) => {
            if (res.error_code === 5) {
                setStatus(4)
            } else if (res.error_code !== 0) {
                setStatus(res.error_code)
                setErrorMsg(res.error_msg)
            } else if (location.state
                && Object.prototype.hasOwnProperty.call(location.state, 'create')
                && location.state.create) {
                setTimeout(() => {
                    setData(res.data)
                    setStatus(res.data.status)
                }, 5000)
            } else {
                setData(res.data)
                setStatus(res.data.status)
            }
        })
    }, [roomCode])

    const submitName = (newName: string): void => {
        window.sessionStorage.setItem('name', newName)
        setName(newName)
    }

    const restart = (): void => {
        setName(null)
        setStatus(0)
        setData(initialRoomStatusData)
        history.push('/')
    }

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
    case 4: // room not found
        return <EwsH1>Room not found, please use a valid room code</EwsH1>
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

export default Room
