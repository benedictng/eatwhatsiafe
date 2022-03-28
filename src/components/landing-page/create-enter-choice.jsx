import { useState } from 'react'
import Box from '@mui/material/Box';
import SingleTextInput from 'components/common/single-text-input'
import FloatingOrangeButton from 'components/common/floating-orange-button'

const CreateOrEnterRoom = ({ createOrEnter }) => {
    const [isEnter, setIsEnter] = useState(false)

    const toggleIsEnter = () => {
        setIsEnter(!isEnter)
    }

    const onSubmit = (roomCode) => {
        createOrEnter(roomCode)
    }

    const renderChoice = () => (
        <Box sx={
            {
                display: 'flex', my: 5, 'align-items': 'center', justifyContent: 'center',
            }
        }
        >
            <FloatingOrangeButton onClick={toggleIsEnter} buttonText="Enter Room" />
            <FloatingOrangeButton onClick={createOrEnter} buttonText="Create Room" />
        </Box>
    )

    const renderEnterCode = () => (
        <SingleTextInput
            label="Room Code:"
            submitButtonLabel="Submit"
            onSubmit={onSubmit}
            backButtonLabel="Back"
            onBack={toggleIsEnter}
        />
    )

    return (
        <div className="create-enter-room-container">
            { isEnter
                ? renderEnterCode()
                : renderChoice()}
        </div>
    )
}

export default CreateOrEnterRoom
