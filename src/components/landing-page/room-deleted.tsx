import Button from 'react-bootstrap/Button'

interface RoomDeletedProps {
    roomCode: string,
    restart: () => void
}

const RoomDeleted = ({roomCode, restart}: RoomDeletedProps) => {   
    return (
        <>
            <p>Room {roomCode.toUpperCase()} has expired. Double check your room code or create your own Room!</p>
            <Button onClick={restart}>Restart</Button>
        </>
    )
}

export default RoomDeleted
