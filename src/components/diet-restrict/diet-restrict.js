import React, { Component } from 'react'
import NextButton from '../common/next-button'
import BackButton from '../common/back-button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { dietRestrictData } from "./diet-restrict-data";

const options = dietRestrictData.options
const state = dietRestrictData.state

export class Cuisine extends Component {
    constructor(props) {
        super(props)
        if (props.formData == null) {
            this.state = state
            props.setFormData({...this.state})
        } else {
            this.state = {...props.formData}
        }
    }

    onCheckboxTicked = (cuisine) => {
        this.setState({
            ...this.state,
            [cuisine]: !this.state[cuisine]
        })
    }

    onDone = () => {
       this.props.setFormData(this.state)
       this.props.nextStep()
    }

    render() {
      
      const buttonMap = options.map(x => 
        <ToggleButton
        type="checkbox"
        variant="primary"
        checked={this.state[x]}
        name = {x}
        onChange={() => this.onCheckboxTicked(x)}
        >
          {x}
        </ToggleButton>
        )

        return(
        <>
        <p>I can't eat this</p>    
        {buttonMap}
        <br/>
        <br/>
        <NextButton nextStep={this.onDone}/> 
        <br/>
        <BackButton prevStep={this.props.prevStep}/>
        
        </>
        )
    }
}

export default Cuisine
