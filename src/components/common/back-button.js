import React, { Component } from 'react'
//import Button from 'react-bootstrap/Button'
import Button from '@mui/material/Button';



export class BackButton extends Component {
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        return (
            <div>
                <Button onClick={this.back} variant = "contained">back</Button>            
            </div>
        )
    }
}

export default BackButton
