import React, { Component } from 'react'
import NextButton from '../common/NextButton'
import BackButton from '../common/BackButton'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'



export class Cuisine extends Component {
    constructor(props) {
        super(props)
        if (props.formData == null) {
            this.state = {location: 'Choose your location'}
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
        return(
        <div>
        <p>Where do you wanna eat</p>    
        
        <DropdownButton id="dropdown-basic-button" title={this.state.location} onSelect = {this.handleChange} >
            <Dropdown.Item eventKey='North'>North</Dropdown.Item>
            <Dropdown.Item eventKey="South">South</Dropdown.Item>
            <Dropdown.Item eventKey="East">East</Dropdown.Item>
            <Dropdown.Item eventKey="West">West</Dropdown.Item>
            
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
