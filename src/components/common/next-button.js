import React, { Component } from 'react'
//import Button from 'react-bootstrap/Button'
import Button from '@mui/material/Button';

export class NextButton extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        return (
            <div>
                <Button onClick={this.continue} variant = "contained">Next</Button>            
            </div>
        )
    }
}

export default NextButton
