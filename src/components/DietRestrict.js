import React, { Component } from 'react'

export class DietRestrict extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
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
                <button onClick={this.continue}>Next</button> 
                <br />
                <br />
                <button onClick={this.back}>Back</button> 
                <p>{this.props.values.dietRest}</p>
            </div>
            )
      }
}

export default DietRestrict
