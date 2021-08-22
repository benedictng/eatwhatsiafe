import RoomAPI from 'api/room'
import { Card, ListGroup, ListGroupItem }from 'react-bootstrap'
import { useParams, useLocation, Link } from 'react-router-dom'


const Status = () => {
    const { roomCode } = useParams()
    const location = useLocation()

    const votedUsers = location.state.voted_users
    const votedUsersMap = votedUsers.map(x =>
        <ListGroupItem>{x}</ListGroupItem>
    )

    const closeRoom = () => {
        RoomAPI.closeRoom({room_code: roomCode}).then(res => {
            // To direct to closed room page here.
            // can use history.push
            alert('room closed bitch')
        })
    }

    return (
        <div>
            <p>Friday Dinner</p>
            <p>Room Code - { roomCode }</p>
            <p>sharing url - http://localhost:3000/room/{ roomCode }</p>
            
            <br/>
            <Card style={{ width: '50rem'}} >
                <Card.Body>
                    <Card.Title>Co-operative friends who have voted</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  {votedUsersMap}
                </ListGroup>
                <Card.Body>
                    <Card.Link style={{cursor: 'pointer'}} onClick={closeRoom}>Close Room</Card.Link>
                </Card.Body>
            </Card>
            <br/>
            

            <Link to='/restaurant-details'>Enter Swiping Flow</Link>
            <br />
            <Link to='/preferences'>Shortcut to preferences</Link><br />

        </div>
    )
}

export default Status
