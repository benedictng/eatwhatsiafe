import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export class NextButton extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        return (
            <div>
                <Button onClick={this.continue} variant = "secondary">Next</Button>            
            </div>
        )
    }
}

export default NextButton
