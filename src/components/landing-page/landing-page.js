import {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import CreateOrEnterRoom from 'components/landing-page/create-enter-choice'
import GetHostName from 'components/landing-page/get-host-name'
import GetJoinerName from 'components/landing-page/get-joiner-name'
import './landing-page.css'

const LandingPage = () => {

    const [step, setStep] = useState(0)
    const [usersDoneVoting, setUsersDoneVoting] = useState([])
    const history = useHistory()

    const createOrEnter = (roomCode=null) => {
        if (roomCode === null) {
            // creating room
            setStep(2)
        }
        else {
            // TODO make call for room information NOTE - this call should be done in room. no calls her.
            setUsersDoneVoting(['bing', 'ben', 'boon'])
            setStep(1)
        }
    }

    const createRoom = (data) => {
        alert('Creating room with data: ' + JSON.stringify(data))
        history.push('/create-room', data)
    }

    const renderSteps = () => {
        switch(step) {
            case 0:
                return <CreateOrEnterRoom createOrEnter={createOrEnter}/>
            case 1:
                return <GetJoinerName existingUsers={usersDoneVoting} />
            case 2:
                return <GetHostName createRoom={createRoom}/>
            default:
                return null
        }
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <Link to='/create-room'>Shortcut to create room</Link>
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
