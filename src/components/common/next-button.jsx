import { Component } from 'react'
// import Button from 'react-bootstrap/Button'
import Button from '@mui/material/Button';

class NextButton extends Component {
    continue = (e) => {
        const { nextStep } = this.props
        e.preventDefault()
        nextStep()
    }

    render() {
        return (
            <div>
                <Button onClick={this.continue} variant="contained">Next</Button>
            </div>
        )
    }
}

export default NextButton
