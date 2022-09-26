/*eslint-disable*/
import { useParams, useHistory, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import RoomAPI from 'api/room'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { NoEncryption } from '@mui/icons-material';
import FloatingOrangeButton from 'components/common/floating-orange-button'
import LongFloatingOrangeButton from 'components/common/long-floating-orange-button'
import Footer from 'components/footer'
import { EwsH1, EwsH2, EwsH3, EwsSubtitle } from 'components/common/typography/text-components';
import { minWidth } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import colors from 'common/colors';




const Status = ({ roomData }) => {
    const [error, setError] = useState(false);
    const [closeRoomPopup, setCloseRoomPopup] = useState(false);
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
            <LongFloatingOrangeButton sx={{ mx: 'auto' }} onClick={swipingFlow} buttonText="START SWIPING!" />
        )
    }

    function copy() {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
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

    const UserList = () => {
        const isMinWidth = useMediaQuery('(min-width:600px)')

        if (isMinWidth) {
            return (
                <Card sx={{
                    width: '30vw', mx: 'auto', my: 5, border: '1px solid black', py: 2,
                }}
                >
                    <EwsH3>{votedUsersString}</EwsH3>
                </Card>
            )
        } else {
            return (
                <Card sx={{
                    width: '90vw', mx: 'auto', my: 5, border: '1px solid black', py: 2,
                }}
                >
                    <EwsH3>{votedUsersString}</EwsH3>
                </Card>
            )
        }
    }

    return (
        <div>
            <EwsH1>Nice,</EwsH1>
            <EwsH1>Time to make a bloody decision!</EwsH1>
            <Box sx={{mt:1}}>
                <EwsSubtitle>Share this link with your friends and start swiping. Please.</EwsSubtitle>
            </Box>
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
                    <EwsSubtitle>{window.location.href}</EwsSubtitle>
                </Box>
                <Button class="copy-button" onClick={copy}><EwsSubtitle>COPY</EwsSubtitle></Button>
            </Box>
            <EwsH2>Suckers who have already voted:</EwsH2>
            <UserList />
            <Box sx={
                {
                    display: 'flex', my: 5, 'align-items': 'stretch', justifyContent: 'center', height: '52px',
                }
            }
            >
                {swipedStatus ? <FloatingOrangeButton sx={{ mx: 'auto' }} onClick={()=>{setCloseRoomPopup(true)}} buttonText="Close Room" /> : <SwipingButton />}
            </Box>
            <Dialog
                open={closeRoomPopup}
                onClose={()=>{setCloseRoomPopup(false)}}
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" fontSize={'28px'} color={'black'}>
                        <EwsH1>To reveal the results, you will be closing voting permanently.</EwsH1>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button sx={{
                        backgroundColor: '#E4664D', color: 'black', 'box-shadow': `8px 8px ${colors.almostBlack}`, mx: 'auto', 'margin-bottom': '1rem',
                        '&:hover': {
                            transform: 'translate(8px, 8px)',
                            'background-color': '#9eeadd',
                        }
                    }}
                    variant="contained"
                    onClick={()=>{setCloseRoomPopup(false)}}
                    >
                        <EwsH3>no, continue voting</EwsH3>
                    </Button>
                    <Button sx={{
                        backgroundColor: '#C4DC74', color: 'black', 'box-shadow': `8px 8px ${colors.almostBlack}`, mx: 'auto', 'margin-bottom': '1rem',
                        '&:hover': {
                            transform: 'translate(8px, 8px)',
                            'background-color': '#9eeadd',
                        }
                    }}
                    onClick={closeRoom}
                    variant="contained"
                    >
                        <EwsH3>yes, end votes</EwsH3>
                    </Button>
                </DialogActions>
            </Dialog>
            <Footer/>
        </div>
    )
}

export default Status;
