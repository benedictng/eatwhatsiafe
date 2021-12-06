import { Component } from 'react'
// import Button from 'react-bootstrap/Button'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

class BackButton extends Component {
    back = (e) => {
        const { prevStep } = this.props
        e.preventDefault();
        prevStep();
    }

    render() {
        return (
            <Box sx={{
                position: 'relative',
                bottom: '-8px',
                right: '-8px',
                'background-color': '#1d1d1d',
                width: '166px',
                height: '48px',
                mx: 1,
            }}
            >
                <Button
                    onClick={this.back}
                    variant="contained"
                    sx={{
                        bottom: '8px',
                        right: '8px',
                        position: 'relative',
                        'border-radius': 0,
                        width: '100%',
                        height: '100%',
                        'background-color': '#FFB854',
                        color: '#1D1D1D',
                        '&:hover': {
                            transform: 'translate(8px, 8px)',
                            'background-color': '#9eeadd',

                        },
                        transition: 'transform 0.3s',
                    }}
                >
                    Back
                </Button>
            </Box>
        )
    }
}

export default BackButton
