import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import CreateOrEnterRoom from 'components/landing-page/create-enter-choice'
import GetHostName from 'components/landing-page/get-host-name'
import Footer from 'components/footer'
import './landing-page.css'

const LandingPage = () => {
    // var backie = radial-gradient(76.72% 76.72% at 50.49% 48.67%, #9FEADD 40.62%, #FFB854 87.5%);
    // document.body.style.backgroundColor = 'backie';
    const [step, setStep] = useState(0)
    const [roomCode, setRoomCode] = useState(null)
    const history = useHistory()

    const createOrEnter = (_roomCode = null) => {
        setRoomCode(_roomCode)

        if (_roomCode === null) {
            setStep(1) // creating room
        } else {
            history.push(`/room/${_roomCode}`)
        }
    }

    const createRoom = (data) => {
        alert(`Creating room with data: ${JSON.stringify(data)}`)
        history.push('/create-room', data)
    }

    const restart = () => {
        setRoomCode(null)
        setStep(0)
    }

    const renderSteps = () => {
        switch (step) {
        case 0:
            return <CreateOrEnterRoom createOrEnter={createOrEnter} />
        case 1:
            return <GetHostName createRoom={createRoom} roomCode={roomCode} onBack={restart} />
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
            <Footer />
        </div>
    )
}

export default LandingPage
