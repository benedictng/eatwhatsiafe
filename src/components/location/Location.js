import React, { Component } from 'react'
import BackButton from '../common/BackButton'
import NextButton from '../common/NextButton'

export class Location extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        }

   
    render() {
        return (
            <div>
                <p> I want to eat around </p>
                <form >
                <input 
                    list="location" 
                    placeholder = "loc"
                    onChange = {this.props.handleChange('loc')}
                />
                    <datalist id="location">
                        <option value="1">East</option>
                        <option value="2">West</option>
                        <option value="3">North</option>
                        <option value="4">South</option>
                    </datalist>
                </form>
                <br />
                <NextButton 
                        nextStep = {this.props.nextStep}
                    />                
                <br />
                <br />
                <BackButton 
                        prevStep = {this.props.prevStep}
                    />
                <p>{this.props.values.loc}</p>
            </div>
            )
      }
}

export default Location
