import React, { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from 'components/common/back-button'
import { statusData } from "./status-data"
import { Card, ListGroup, ListGroupItem }from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


const Status = (props) => {

  const { roomCode } = useParams()

  const votedUsers = statusData.voted_users
  const votedUsersMap = votedUsers.map(x =>
    <ListGroupItem>{x}</ListGroupItem>
    )

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
