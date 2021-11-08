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
                <Button
                    onClick={this.continue}
                    variant="contained"
                    sx={{
                        'border-radius': 0,
                        width: '343px',
                        height: '48px',
                        'background-color': '#FFB854',
                        color: '#1D1D1D',
                        'box-shadow': '8px 8px #1D1D1D',
                        'margin-top': '48px',
                    }}
                >
                    Next
                </Button>
            </div>
        )
    }
}

export default NextButton
