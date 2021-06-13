import React, { Component } from 'react'
import NextButton from '../common/NextButton'
import BackButton from '../common/BackButton'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'



export class Cuisine extends Component {
    constructor(props) {
        super(props)
        if (props.formData == null) {
            this.state = {chinese: false, western: false, japanese: false, korean: false }
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
        return(
        <>

        <p>Me no like this</p>    

        <ToggleButton
          type="checkbox"
          variant="primary"
          checked={this.state.chinese}
          name = 'chinese'
          onChange={() => this.onCheckboxTicked('chinese')}
        >
          Chinese
        </ToggleButton>
        
        <ToggleButton
          type="checkbox"
          variant="primary"
          checked={this.state.western}
          name = 'western'
          onChange={() => this.onCheckboxTicked('western')}
        >
          Western
        </ToggleButton>
        
        <ToggleButton
          type="checkbox"
          variant="primary"
          checked={this.state.japanese}
          name = 'japanese'
          onChange={() => this.onCheckboxTicked('japanese')}
        >
          Japanese
        </ToggleButton>
        
        <ToggleButton
          type="checkbox"
          variant="primary"
          checked={this.state.korean}
          name = 'korean'
          onChange={() => this.onCheckboxTicked('korean')}
        >
          Korean
        </ToggleButton>
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
