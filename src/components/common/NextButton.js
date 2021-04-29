import React, { Component } from 'react'

export class NextButton extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        return (
            <div>
                <button onClick={this.continue}>Next</button>            
            </div>
        )
    }
}

export default NextButton
