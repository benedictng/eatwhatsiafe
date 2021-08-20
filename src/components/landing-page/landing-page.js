import {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import CreateOrEnterRoom from 'components/landing-page/create-enter-choice'
import GetHostName from 'components/landing-page/get-host-name'
import GetJoinerName from 'components/landing-page/get-joiner-name'
import RoomAPI from 'api/room';
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
            RoomAPI.getRoomStatus({room_code: roomCode}).then(res => {
                switch(res.data.status) {
                    case 1: // active
                        setUsersDoneVoting(res.data.voted_users)
                        setStep(1)
                        break
                    case 2: // closed

                        break
                    default:
                        // some error
                        console.log(`Unexpected room status code ${res.data.status}.`)
                        setStep(4)
                        setTimeout(() => setStep(0), 1500)
                        break
                }
            })
            // active: -> get name
            // closed: -> direct to results
            // deleted: -> deleted page

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
            case 4:
                return <p>Error ocurred, refreshing page..</p>
            default:
                return null
        }
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <Link to='/create-room'>Shortcut to create room</Link><br />
            <Link to='/example-api-call'>Example API Call</Link>
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
