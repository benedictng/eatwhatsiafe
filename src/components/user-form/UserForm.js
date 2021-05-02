import React, { Component } from 'react';
import Entrance from '../entrance/Entrance';
import PartySize from '../party-size/PartySize';
import Cuisine from '../cuisine/Cuisine';
import DietRestrict from '../diet-restrict/DietRestrict'
import Location from '../location/Location'
import BackButton from '../common/BackButton'
import NextButton from '../common/NextButton'




export class UserForm extends Component {
    state = {
        step: 1,
        size: 0,
        cuisineVeto: 0,
        dietRest: 0,
        loc: 0,
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

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { size, cuisineVeto, dietRest, loc } = this.state;
        const values = { size, cuisineVeto, dietRest, loc };

        switch(step) {
            case 1: 
                return (
                    <Entrance 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values={values}
                    />
                )
            case 2: 
                return ( 
                    <PartySize 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 3:
                return ( 
                    <Cuisine 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 4: 
                return (
                    <DietRestrict 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 5:
                return (
                    <Location 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    values = {values}
                />
                )
            case 6:
                return (
                    <div>
                        <p>size, cuisineVeto, dietRest, loc</p>
                        <p>{this.state.size}</p>
                        <p>{this.state.cuisineVeto}</p>
                        <p>{this.state.dietRest}</p>
                        <p>{this.state.loc}</p>
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
