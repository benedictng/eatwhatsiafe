import { useState } from 'react'
import Box from '@mui/material/Box';
import SingleTextInput from 'components/common/single-text-input'
import FloatingOrangeButton from 'components/common/floating-orange-button'

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
        <>
            <p className="h0" style={{ 'font-size': '6rem' }}>
                Eatwhatsia...
                <br />
                IDK F***
            </p>
            <div style={{ height: '1.5rem' }} />
            <h1 style={{ 'line-height': '2rem' }}>Decide together and EatHereLah</h1>
        </>
    )

    return (
        <div style={{ margin: 'auto' }}>
            {renderWelcomeText}
            {renderButtons()}
        </div>
    )
}

export default WelcomeScreen
