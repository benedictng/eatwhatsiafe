import React, { Component } from 'react'

export class BackButton extends Component {
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        return (
            <div>
                <button onClick={this.back}>back</button>            
            </div>
        )
    }
}

export default BackButton
