import { useState } from 'react'
import Box from '@mui/material/Box';
import SingleTextInput from 'components/common/single-text-input'
import FloatingOrangeButton from 'components/common/floating-orange-button'

import Container from '@mui/material/Container';

const WelcomeScreen = ({ createRoom, enterRoom }) => {
    const [enteringRoom, setEnteringRoom] = useState(false)

    const toggleEnteringRoom = () => setEnteringRoom(!enteringRoom)

    const renderButtons = () => {
        if (enteringRoom) {
            return (
                <SingleTextInput
                    label={null}
                    helperText="Room Code (e.g. ABCD)"
                    submitButtonLabel="Submit"
                    onSubmit={enterRoom}
                    backButtonLabel="Back"
                    onBack={toggleEnteringRoom}
                />
            )
        }
        return (
            <Box sx={
                {
                    display: 'flex', my: 5, 'align-items': 'center', justifyContent: 'center',
                }
            }
            >
                <FloatingOrangeButton onClick={toggleEnteringRoom} buttonText="Enter Room" />
                <FloatingOrangeButton onClick={createRoom} buttonText="Create Room" />
            </Box>
        )
    }

    const renderWelcomeText = (
        <Container>
            <p className="h0">
                Eat what sia...
                <br />
                IDK F***
            </p>
            <div style={{ height: '1.5rem' }} />
            <h1>Decide together and EatHereLah</h1>
        </Container>
    )

    return (
        <div style={{ margin: 'auto' }}>
            {renderWelcomeText}
            {renderButtons()}
        </div>
    )
}

export default WelcomeScreen
