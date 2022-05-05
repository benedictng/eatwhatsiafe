/*eslint-disable*/
import { useParams, useHistory, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import RoomAPI from 'api/room'
// import Button from 'react-bootstrap/Button';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { NoEncryption } from '@mui/icons-material';
import FloatingOrangeButton from 'components/common/floating-orange-button'


const Status = ({ roomData }) => {
    const [error, setError] = useState(false);
    const { roomCode } = useParams()
    const history = useHistory()

    const swipedStatus = roomData.voted_users.includes(window.sessionStorage.getItem('name'))

    const swipingFlow = () => {
        history.push(`/room/${roomCode}/selection`, history.location.state)
    }

    const votedUsersString = (roomData.voted_users.length > 0) ? roomData.voted_users.join(', ') : 'Nobody has voted'

    function errorDialog() {
        if (error === true) {
            return (
                <div>
                    <Dialog
                        open={error}
                        onClose={restartSelection}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            There are no food places found based on your requirements.
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Your food selection criteria is too narrow, dumbassie.
                                Please restart and select a wider set of criteria.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>

                            <Button onClick={restartSelection} autoFocus>
                                Restart
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )
        } return null
    }

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
            if (res.error_code === 0) {
                window.location.reload()
            } else {
                setError(true)
            }            // after api call, room status in BE should be updated. upon reload,room page (wrapper page) should detect that status is now closed and will render results instead)
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
            <Box sx={
                {
                    display: 'flex', my: 5, 'align-items': 'stretch', justifyContent: 'center', height: '52px',
                }
            }
            >
                {swipedStatus ? <FloatingOrangeButton sx={{ mx: 'auto' }} onClick={closeRoom} buttonText="Close Room" /> : <SwipingButton />}
            </Box>
        </div>
    )
}

export default Status;
