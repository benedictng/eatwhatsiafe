import React, { useState } from 'react'
import NextButton from '../common/next-button'
import BackButton from '../common/back-button'
import { statusData } from "./status-data"
import { Card, ListGroup, ListGroupItem }from 'react-bootstrap'
import Button from 'react-bootstrap/Button'






function Status(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const votedUsers = statusData.voted_users
  const votedUsersMap = votedUsers.map(x =>
    <ListGroupItem>{x}</ListGroupItem>
    )

  return (
    <div>
        <p>Lets check out the status of this page!</p>
        <p>Room Code - room code tied to url?</p>
        <p>sharing options - where to get url from</p>
        
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
        
        <Button variant = "primary">route to alexis pages - enter swiping flow</Button>
        <br/>
        <br/>
        <NextButton nextStep={props.nextStep}/> 
        <br/>
        <BackButton prevStep={props.prevStep}/>
    </div>
  );
}

export default Status
