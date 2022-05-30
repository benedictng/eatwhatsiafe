import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import GetHostName from 'components/landing-page/get-host-name'
import Footer from 'components/footer'
import './landing-page.css'
import WelcomeScreen from './welcome-screen'

const LandingPage = () => {
    // var backie = radial-gradient(76.72% 76.72% at 50.49% 48.67%, #9FEADD 40.62%, #FFB854 87.5%);
    // document.body.style.backgroundColor = 'backie';
    const [step, setStep] = useState(0)
    const [roomCode, setRoomCode] = useState(null)
    const history = useHistory()

    const enterRoom = (_roomCode) => {
        history.push(`/room/${_roomCode}`)
    }

    const createRoom = (data) => {
        history.push('/create-room', data)
    }

    const restart = () => {
        setRoomCode(null)
        setStep(0)
    }

    const renderSteps = () => {
        switch (step) {
        case 0:
            return <WelcomeScreen createRoom={() => setStep(1)} enterRoom={enterRoom} />
        case 1:
            return <GetHostName createRoom={createRoom} roomCode={roomCode} onBack={restart} />
        default:
            return null
        }
    }

    return (
        <div>
            <div className="landing-page-content-container">
                {renderSteps()}
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage
