import { EwsP } from 'components/common/typography/text-components'
import { Button } from '@mui/material'

interface RoomDeletedProps {
    roomCode: string,
    restart: () => void
}

const RoomDeleted = ({ roomCode, restart }: RoomDeletedProps) => (
    <>
        <EwsP>
            Room
            {roomCode.toUpperCase()}
            {' '}
            has expired. Double check your room code or create your own Room!
        </EwsP>
        <Button onClick={restart}>Restart</Button>
    </>
)

export default RoomDeleted
