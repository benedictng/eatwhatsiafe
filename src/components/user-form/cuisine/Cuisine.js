import React, { Component } from 'react'
import NextButton from '../../common/next-button'
import BackButton from '../../common/back-button'
import SelectionButton from '../../common/selection-button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { cuisineData } from "./cuisine-data";

const options = cuisineData.options
const state = cuisineData.state

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
        <p>Me no like this</p>    
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
