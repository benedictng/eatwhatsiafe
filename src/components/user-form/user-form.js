import React, { Component } from 'react';
import Price from 'components/user-form/price'
import Cuisine from 'components/user-form/cuisine';
import DiningType from 'components/user-form/dining-type'
import DietRestrict from 'components/user-form/diet-restrict'
import Location from 'components/user-form/location'
import BackButton from 'components/common/back-button'
import { Link } from 'react-router-dom';




export class UserForm extends Component {
    state = {
        //step decides which page of the form to show
        step: 1,
        
        //price
        price: null,

        //cuisineVeto
        veto: null,

        //dining type
        diningType: null,

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

    setDining = (value) => {
        this.setState ({
            diningType: value
        })
    }

    setPrice = (value) => {
        this.setState ({
            price: value
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
                    <div>
                        <Price 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        setFormData = {this.setPrice}
                        formData = {this.state.price}
                        />
                        <br/>
                        <p>VETO DATA: {JSON.stringify(this.state.price, null, '\t')}</p>
                    </div>
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
                        <DiningType
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        setFormData = {this.setDining}
                        formData = {this.state.diningType}
                        />
                        <br/>
                        <p>REST DATA: {JSON.stringify(this.state.diningType, null, '\t')}</p>
                    </div>
            )

            case 4: 
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
            case 5:
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
            
            case 6:
                //just to show state
                return (
                    <div>
                        <p>DATA: {JSON.stringify(this.state, null, '\t')}</p>
                        <Link to='/room-status'>Go to status page</Link><br />

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
