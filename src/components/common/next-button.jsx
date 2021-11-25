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
            <Button
                onClick={this.continue}
                variant="contained"
                sx={{
                    'border-radius': 0,
                    width: '166px',
                    height: '48px',
                    'background-color': '#FFB854',
                    color: '#1D1D1D',
                    'box-shadow': '8px 8px #1D1D1D',
                    mx: 1,
                }}
            >
                Next
            </Button>
        )
    }
}

export default NextButton
