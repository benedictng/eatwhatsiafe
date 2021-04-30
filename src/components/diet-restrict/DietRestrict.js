import React, { Component } from 'react'
import BackButton from '../common/BackButton'
import NextButton from '../common/NextButton'

export class DietRestrict extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        }

       
    render() {
        return (
            <div>
                <p> dietary restriction</p>
                <form >
                <input 
                    list="veto" 
                    placeholder = "cuisineVeto"
                    onChange = {this.props.handleChange('dietRest')}
                />
                    <datalist id="veto">
                        <option value="1">Chinese</option>
                        <option value="2">Western</option>
                        <option value="3">Japanese</option>
                        <option value="4">Korean</option>
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
                <p>{this.props.values.dietRest}</p>
            </div>
            )
      }
}

export default DietRestrict
