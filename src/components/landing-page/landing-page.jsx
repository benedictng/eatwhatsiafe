import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import CreateOrEnterRoom from 'components/landing-page/create-enter-choice'
import GetHostName from 'components/landing-page/get-host-name'
import GetJoinerName from 'components/landing-page/get-joiner-name'
import RoomAPI from 'api/room'
import RoomDeleted from './room-deleted'
import './landing-page.css'

const LandingPage = () => {
    const [step, setStep] = useState(0)
    const [roomCode, setRoomCode] = useState(null)
    const [roomStatusData, setRoomStatusData] = useState(null)
    const history = useHistory()

    const createOrEnter = (_roomCode = null) => {
        setRoomCode(_roomCode)

        if (_roomCode === null) {
            // creating room
            setStep(2)
        } else {
            // TODO make call for room information NOTE - this call should be done in room. no calls here.
            RoomAPI.getRoomStatus({ room_code: _roomCode }).then((res) => {
                switch (res.data.status) {
                case 1: // active
                    setRoomStatusData(res.data)
                    setStep(1)
                    break
                case 2: // closed
                    history.push(`/room/${_roomCode}`, res.data)
                    break
                case 3: // deleted
                    setStep(3)
                    break
                default:
                    // some error
                    console.log(`Unexpected room status code ${res.data.status}.`)
                    setStep(4)
                    setTimeout(() => setStep(0), 1500)
                    break
                }
            })
        }
    }

    const createRoom = (data) => {
        alert(`Creating room with data: ${JSON.stringify(data)}`)
        history.push('/create-room', data)
    }

    const toRoomStatusPage = (userVoted) => {
        history.push(`/room/${roomCode}`, { ...roomStatusData, userVote: userVoted })
    }

    const restart = () => {
        setRoomStatusData(null)
        setRoomCode(null)
        setStep(0)
    }

    const renderSteps = () => {
        switch (step) {
        case 0:
            return <CreateOrEnterRoom createOrEnter={createOrEnter} />
        case 1:
            return (
                <GetJoinerName
                    existingUsers={roomStatusData.voted_users}
                    toRoomStatusPage={toRoomStatusPage}
                />
            )
        case 2:
            return <GetHostName createRoom={createRoom} roomCode={roomCode} />
        case 3:
            return <RoomDeleted restart={restart} roomCode={roomCode} />
        case 4:
            return <p>Error ocurred, refreshing page..</p>
        default:
            return null
        }
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <Link to="/create-room">Shortcut to create room</Link>
            <br />
            <Link to="/room/roomcode:test">Shortcut to status page</Link>
            <br />
            <Link to="/example-api-call">Example API Call</Link>
            <br />
            <hr />
            <br />
            <div className="landing-page-content-container">
                {renderSteps()}
            </div>
        </div>
    )
}

export default LandingPage;
