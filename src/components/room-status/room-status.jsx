import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useParams, Link, useHistory } from 'react-router-dom'

import RoomAPI from 'api/room'
// import Button from 'react-bootstrap/Button';
import Button from '@mui/material/Button';

const Status = ({ roomData }) => {
    const { roomCode } = useParams()

    const history = useHistory()

    const swipingFlow = () => {
        history.push(`/room/${roomCode}/selection`)
    }

    const votedUsersMap = roomData.voted_users.map((x) => <ListGroupItem>{x}</ListGroupItem>)

    const SwipingButton = () => {
        if (roomData.voted_users.includes(window.sessionStorage.getItem('name'))) {
            return null
        }
        return (
            <Button onClick={swipingFlow}>Enter Swiping Flow</Button>
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
            <p>
                history.location.state: $
                {JSON.stringify(history.location.state)}
            </p>
            <p>
                Room Name:
                { roomData.room_name }
            </p>
            <p>
                Room Code:
                { roomCode }
            </p>
            <p>
                Dude&apos;s name:
                {window.sessionStorage.getItem('name')}
            </p>
            <p>
                sharing url - http://localhost:3000/room/
                { roomCode }
            </p>

            <br />
            <Card style={{ width: '50rem', margin: 'auto' }}>
                <Card.Body>
                    <Card.Title>Co-operative friends who have voted</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {votedUsersMap}
                </ListGroup>
                <Card.Body>
                    <Button variant="contained" onClick={closeRoom}>Close room</Button>
                </Card.Body>
            </Card>
            <br />

            <SwipingButton />

            <br />
            <Link to="/preferences">Shortcut to preferences</Link>
            <br />

        </div>
    )
}

export default Status;
