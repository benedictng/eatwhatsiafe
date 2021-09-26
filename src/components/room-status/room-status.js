import React, { useState, useEffect } from 'react'
import { Card, ListGroup, ListGroupItem }from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link, useHistory, useLocation } from 'react-router-dom';
import RoomAPI from 'api/room'
import Button from 'react-bootstrap/Button';



const Status = ({ roomData }) => {

  const location = useLocation()
  const { roomCode } = useParams()

  const history = useHistory()

  const swipingFlow = () => {
    history.push('/restaurant-details', {name: "placeholder name", roomName: roomData.room_name, roomCode: roomCode})
    // history.push('/restaurant-details', {name: history.location.state.name, roomName: roomData.room_name, roomCode: roomCode})
  }

  const votedUsersMap = roomData.voted_users.map(x =>
    <ListGroupItem>{x}</ListGroupItem>
    )

  const closeRoom = () => {
    RoomAPI.closeRoom({
      room_code: roomCode
  }).then(res => {
      alert(`received response: ${JSON.stringify(res)}`)
      //find some way to refresh page or load results page - see quek's wrapper implementation
  })
  }
  


  return (
    <div>
        <p>history.location.state: ${JSON.stringify(history.location.state)}</p>
        <p>{ roomData.room_name }</p>
        <p>Room Code - { roomCode }</p>
        <p>sharing url - http://localhost:3000/room/{ roomCode }</p>
        
        <br/>
        <Card style={{ width: '50rem', margin: "auto"}} >
            <Card.Body>
                <Card.Title>Co-operative friends who have voted</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
               {votedUsersMap}
            </ListGroup>
            <Card.Body>
                <Button variant='primary' onClick = {closeRoom}>Close room</Button>
            </Card.Body>
        </Card>
        <br/>
        
      
        <Button onClick={swipingFlow}>Enter Swiping Flow</Button>
        <br />
        <Link to='/preferences'>Shortcut to preferences</Link><br />

    </div>
  )
}

export default Status
