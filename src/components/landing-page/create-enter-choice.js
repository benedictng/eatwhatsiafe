import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import SingleTextInput from 'components/common/single-text-input'

const CreateOrEnterRoom = ({createOrEnter}) => {
    const [isEnter, setIsEnter] = useState(false)

    const toggleIsEnter = () => {
        setIsEnter(!isEnter)
    }

    const onSubmit = (roomCode) => {
        createOrEnter(roomCode)
    }

    const renderChoice = () => (
        <>
        <Button variant='light' onClick={toggleIsEnter}>Enter Room</Button>
        <Button variant='light' onClick={() => createOrEnter()}>Create Room</Button>
        </>
    )

    const renderEnterCode = () => (
        <SingleTextInput
            label='Room Code:'
            submitButtonLabel='Submit'
            onSubmit={onSubmit}
            backButtonLabel='Back'
            onBack={toggleIsEnter}
        />
    )

    return (
        <div className='create-enter-room-container'>
        { isEnter
            ? renderEnterCode()
            : renderChoice()
        }
        </div>
    )
}

export default CreateOrEnterRoom
