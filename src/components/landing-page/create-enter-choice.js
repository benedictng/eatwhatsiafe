import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CreateOrEnterRoom = ({createOrEnter}) => {
    const [isEnter, setIsEnter] = useState(false)
    const [roomCode, setRoomCode] = useState(null)

    const toggleIsEnter = () => {
        setIsEnter(!isEnter)
    }

    const onChange = (e) => {
        setRoomCode(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        createOrEnter(roomCode)
    }

    const renderChoice = () => (
        <>
        <Button variant='light' onClick={toggleIsEnter}>Enter Room</Button>
        <Button variant='light' onClick={() => createOrEnter()}>Create Room</Button>
        </>
    )

    const renderEnterCode = () => (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Label>Room Code: </Form.Label>
                <Form.Control className='room-code-input' type='text' name='roomCode' onChange={onChange}/>
            </Form.Group>
            <br />
            <Button variant='light' type='submit'>Submit</Button>
            <Button variant='light' onClick={toggleIsEnter}>Back</Button>
        </Form>
    )

    return (
        <>
        { isEnter
            ? renderEnterCode()
            : renderChoice()
        }
        </>
    )
}

export default CreateOrEnterRoom