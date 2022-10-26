import React, { useEffect, useState } from 'react'
import RoomAPI from 'api/room'
import { useHistory, useParams } from 'react-router-dom'
import Loading from 'components/common/loading'
import Status from 'components/room-status'
import Results from 'components/results/results'
import GetName from 'components/common/get-name'
import { EwsH1, EwsP } from 'components/common/typography/text-components'
import { RoomStatusData } from 'api/room/room_api_interface'
import RoomDeleted from './room-deleted'

const initialRoomStatusData: RoomStatusData = {
    room_name: '', status: 0, voted_users: [], host_username: '',
}

const Room: React.FC = () => {
    const { roomCode } = useParams<{ roomCode: string }>()
    const [status, setStatus] = useState<number | null>(null)
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [data, setData] = useState<RoomStatusData>(initialRoomStatusData)
    const [name, setName] = useState<string | null>(window.sessionStorage.getItem('name'))
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
