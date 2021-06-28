import React, { Component } from 'react';
import Entrance from '../entrance/Entrance';
import Cuisine from '../cuisine/Cuisine';
import DietRestrict from '../diet-restrict/DietRestrict'
import Location from '../location/Location'
import BackButton from '../common/BackButton'
import NextButton from '../common/NextButton'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'



export class UserForm extends Component {
    state = {
        //step decides which page of the form to show
        step: 1,
                
        //cuisineVeto
        veto: null,

        //dietary restriction
        rest:null,

        //location
        location: null
    }

    setVeto = (value) => {
        this.setState ({
            veto: value
        })
    }

    setRest = (value) => {
        this.setState ({
            rest: value
        })
    }

    setLocation = (value) => {
        this.setState ({
            location: value
        })
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    // Go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }


    render() {
        const { step } = this.state;

        switch(step) {
            case 1: 
                return (
                    <Entrance 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                    />
                )
           
            case 2:
                return (
                    <div>
                        <Cuisine 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        setFormData = {this.setVeto}
                        formData = {this.state.veto}
                        />
                        <br/>
                        <p>VETO DATA: {JSON.stringify(this.state.veto, null, '\t')}</p>
                    </div>
                )

            case 3: 
                return (
                    <div>
                        <DietRestrict 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        setFormData = {this.setRest}
                        formData = {this.state.rest}
                        />
                        <br/>
                        <p>REST DATA: {JSON.stringify(this.state.rest, null, '\t')}</p>
                    </div>
            )
            case 4:
                return (
                    <div>
                        <Location 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        setFormData = {this.setLocation}
                        formData = {this.state.location}
                        />
                        <br/>
                        <p>LOCATION DATA: {JSON.stringify(this.state.location, null, '\t')}</p>
                    </div>
                )
            case 5:
                //just to show state
                return (
                    <div>
                        <p>DATA: {JSON.stringify(this.state, null, '\t')}</p>

                        <BackButton 
                        prevStep = {this.prevStep}
                        />
                    </div>
                )
                
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
