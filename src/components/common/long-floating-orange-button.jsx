import { Component } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import colors from 'common/colors';

class FloatingOrangeButton extends Component {
    continue = (e) => {
        const { onClick } = this.props
        e.preventDefault()
        onClick()
    }

    render() {
        const { buttonText } = this.props

        return (
            <Box sx={{
                position: 'relative',
                bottom: '-8px',
                right: '-8px',
                'background-color': colors.almostBlack,
                width: '343px',
                height: '48px',
                mx: 1,
            }}
            >
                <Button
                    onClick={this.continue}
                    variant="contained"
                    sx={{
                        bottom: '8px',
                        right: '8px',
                        position: 'relative',
                        'border-radius': 0,
                        width: '100%',
                        height: '100%',
                        'background-color': colors.orange,
                        color: colors.almostBlack,
                        '&:hover': {
                            transform: 'translate(8px, 8px)',
                            'background-color': '#9eeadd',

                        },
                        transition: 'transform 0.3s',
                        'white-space': 'pre',
                    }}
                >
                    {buttonText}
                </Button>
            </Box>
        )
    }
}

export default FloatingOrangeButton
