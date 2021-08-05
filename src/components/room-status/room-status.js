import React, { useState, useEffect } from 'react'
import { Card, ListGroup, ListGroupItem }from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import RoomAPI from 'api/room'


const Status = (props) => {

  const { roomCode } = useParams()
  const [roomName, setRoomName] = useState('')
  const [votedUsers, setVotedUsers] = useState([])
  const history = useHistory()

  useEffect(()=> {
    makeCall()
  }, [roomCode])// Only re-run if roomCode changes

  const makeCall = () => {
    console.log(RoomAPI)
    RoomAPI.getRoomStatus({
        room_name: roomCode
    }).then(res => {
        alert(`received response: ${JSON.stringify(res)}`)
        setRoomName(res.data.room_name)
        setVotedUsers(res.data.voted_users)
    })
  }

  const swipingFlow = () => {
    history.push('/restaurant-details', {name: history.location.state.name, roomName: roomName})
  }

  const votedUsersMap = votedUsers.map(x =>
    <ListGroupItem>{x}</ListGroupItem>
    )
  


  return (
    <div>
        <p>history.location.state: ${JSON.stringify(history.location.state)}</p>
        <p>{ roomName }</p>
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
                <Card.Link href="#">Close room - POST "/room/endvote"</Card.Link>
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
