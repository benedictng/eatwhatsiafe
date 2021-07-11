import React, { Component } from 'react'
import NextButton from '../../common/next-button'
import BackButton from '../../common/back-button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { locData } from "./loc-data";


const options = locData.options
const state = locData.state

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

    handleChange = (value) => {
        this.setState({
            location: value
        })
    }

    onDone = () => {
       this.props.setFormData(this.state)
       this.props.nextStep()
    }

    render() {
        const dropdownMap = options.map(x =>
            <Dropdown.Item eventKey={x}>{x}</Dropdown.Item>
        )
        return(
        <div>
        <p>Where do you wanna eat</p>    
        
        <DropdownButton id="dropdown-basic-button" title={this.state.location} onSelect = {this.handleChange} >
            {dropdownMap}
        </DropdownButton>
        
        <br/>
        <NextButton nextStep={this.onDone}/> 
        <br/>
        <BackButton prevStep={this.props.prevStep}/>
        </div>
        
        
        )
    }
}

export default Cuisine
