/*eslint-disable*/
import { useParams, useHistory, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import RoomAPI from 'api/room'
// import Button from 'react-bootstrap/Button';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { NoEncryption } from '@mui/icons-material';

const Status = ({ roomData }) => {
    const [swipedStatus, setSwipedStatus] = useState(false)
    const { roomCode } = useParams()
    const history = useHistory()

    if (roomData.voted_users.includes(history.location.state.name)) {
        setSwipedStatus(true)
    }


    const swipingFlow = () => {
        history.push(`/room/${roomCode}/selection`, history.location.state)
    }

  const votedUsersString = (roomData.voted_users.length > 0) ? roomData.voted_users.join(', ') : 'Nobody has voted'

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
        }).then((res) => res.data).then((res) => {
            alert(`received response: ${JSON.stringify(res)}`)
            window.location.reload()
            // after api call, room status in BE should be updated. upon reload,room page (wrapper page) should detect that status is now closed and will render results instead)
        })
    }

    return (
        <div>
            <h1>Nice,</h1>
            <h1>Time to make a bloody decision!</h1>
            <p className="subtitle">Share this link with your friends and start swiping. Please.</p>
            <Box sx={
                {
                    display: 'flex', my: 5, 'align-items': 'stretch', justifyContent: 'center', height: '52px',
                }
            }
            >
                <Box sx={{
                    display: 'flex', 'align-items': 'center', 'background-color': '#F4F4F4', p: 1, mx: 1,
                }}
                >
                    <p className="subtitle">{window.location.href}</p>
                </Box>
                <Button class="subtitle copy-button">COPY</Button>
            </Box>
            <h2>Suckers who have already voted:</h2>
            <Card sx={{
                width: '464px', mx: 'auto', my: 5, border: '1px solid black', py: 2,
            }}
            >
                <h3>{votedUsersString}</h3>
            </Card>
            {swipedStatus ? <p>close room</p> : <SwipingButton />}

        </div>
    )
}

export default Status;
