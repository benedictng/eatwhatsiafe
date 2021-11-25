/* eslint-disable */
import { useParams, Link, useHistory } from 'react-router-dom'

import RoomAPI from 'api/room'
// import Button from 'react-bootstrap/Button';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';


const Status = ({ roomData }) => {
    const { roomCode } = useParams()

    const history = useHistory()

    const swipingFlow = () => {
        history.push(`/room/${roomCode}/selection`)
    }

    const votedUsersString = roomData.voted_users.join(", ")

    const SwipingButton = () => {
        if (roomData.voted_users.includes(window.sessionStorage.getItem('name'))) {
            return null
        }
        return (
            <Button
                onClick={swipingFlow}
                variant="contained"
                sx={{
                    'border-radius': 0,
                    width: '343px',
                    height: '48px',
                    'background-color': '#FFB854',
                    color: '#1D1D1D',
                    'box-shadow': '8px 8px #1D1D1D',
                    mx: 1,
                }}
            >
                START SWIPING!
            </Button>
        )
    }

    const closeRoom = () => {
        RoomAPI.closeRoom({
            room_code: roomCode,
        }).then((res) => {
            alert(`received response: ${JSON.stringify(res)}`)
            window.location.reload()
            // after api call, room status in BE should be updated. upon reload,room page (wrapper page) should detect that status is now closed and will render results instead)
        })
    }

    return (
        <div>
            <Typography variant="h1">Nice,</Typography>
            <Typography variant="h1">Time to make a bloody decision!</Typography>
            <Typography >Share this link with your friends and start swiping. Please.</Typography>
            <Box sx={
                {
                    display: 'flex', my: 5, 'align-items': 'center', justifyContent: 'center',
                }
            }>
                <Typography sx={{ 'background-color': '#F4F4F4', p: 1 }}>{window.location.href}</Typography>
                <Button sx={{ 'background-color': '#F4F4F4', p: 1, mx: 1}}>Copy</Button>
            </Box>
            <Typography variant="h2" sx={{ my: 5 }}>Suckers who have already voted:</Typography>
            <Card sx={{ width: '400px', mx: 'auto', my: 5, border: '1px solid black', py: 5}}>
                <Typography>{votedUsersString}</Typography>
            </Card>


            <SwipingButton />


        </div>
    )
}

export default Status;
