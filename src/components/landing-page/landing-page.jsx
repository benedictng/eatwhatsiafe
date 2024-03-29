import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import GetHostName from 'components/landing-page/get-host-name'
import Footer from 'components/footer'
import './landing-page.css'
import BackgroundPattern from 'components/common/background-pattern'
import WelcomeScreen from './welcome-screen'

const LandingPage = () => {
    const [step, setStep] = useState(0)
    const history = useHistory()

    const enterRoom = (_roomCode) => {
        history.push(`/room/${_roomCode}`)
    }

    const createRoom = (data) => {
        history.push('/create-room', data)
    }

    const restart = () => {
        setStep(0)
    }

    const renderSteps = () => {
        switch (step) {
        case 0:
            return <WelcomeScreen createRoom={() => setStep(1)} enterRoom={enterRoom} />
        case 1:
            return <GetHostName createRoom={createRoom} onBack={restart} />
        default:
            return null
        }
    }

    return (
        <div>
            <BackgroundPattern />
            <div className="landing-page-content-container">
                {renderSteps()}
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage
