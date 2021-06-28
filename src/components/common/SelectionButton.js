import React, { Component } from 'react'

export class SelectionButton extends Component {
    select = e => {
        e.preventDefault();
        this.props.select();
    }
    render() {
        return (
            <div>
                <button onChange={this.select}>{[this.props.text]}</button>            
            </div>
        )
    }
}

export default SelectionButton
