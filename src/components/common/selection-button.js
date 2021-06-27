import React, { Component } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton'


export class SelectionButton extends Component {
    select = e => {
        e.preventDefault();
        this.props.select();
    }




    render() {
        return (
            <div>
                <ToggleButton
                    type="checkbox"
                    variant="primary"
                    checked={this.props.checkStatus}
                    name = {this.props.name}
                    onChange={() => this.props.onCheckboxTicked('chinese')}
                >
                {this.props.name}
                </ToggleButton>            
        </div>
        )
    }
}

export default SelectionButton
