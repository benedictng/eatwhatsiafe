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
            <p>So.. where you guys wanna eat??</p>
            <br />
            <h3>&quot;umm... IDK sia..&quot; &quot;idm anything&quot; &quot;not feeling macs sia&quot;</h3>
            <br />
            <br />
            <h1 style={{ 'font-size': '3rem' }}>Decide together and just Eat Here Lah</h1>
        </>
    )

    return (
        <>
            {renderWelcomeText}
            {renderButtons()}
        </>
    )
}

export default WelcomeScreen
