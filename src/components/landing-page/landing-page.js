import React from 'react';
import { Link } from 'react-router-dom';
import CreateOrEnterRoom from './create-enter-choice'
import './landing-page.css'

class LandingPage extends React.Component {

    submitRoomCode = (roomCode) => {
        alert('submitted ' + roomCode + '. Now route to the room page.')
    }

    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <Link to='/preferences'>Click Me</Link>
                <br />
                <hr />
                <br />
                <CreateOrEnterRoom submitRoomCode={this.submitRoomCode}/>
            </div>
        )
    }
}

export default LandingPage;
