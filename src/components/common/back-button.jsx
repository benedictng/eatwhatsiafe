import { Component } from 'react'
// import Button from 'react-bootstrap/Button'
import Button from '@mui/material/Button';

class BackButton extends Component {
    back = (e) => {
        const { prevStep } = this.props
        e.preventDefault();
        prevStep();
    }

    render() {
        return (
            <div>
                <Button onClick={this.back} variant="contained">back</Button>
            </div>
        )
    }
}

export default BackButton
