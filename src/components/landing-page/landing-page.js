import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <Link to='/preferences'>Click Me</Link>
            </div>
        )
    }
}

export default LandingPage;
