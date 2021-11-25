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
            <Button
                onClick={this.back}
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
                Back
            </Button>
        )
    }
}

export default BackButton
