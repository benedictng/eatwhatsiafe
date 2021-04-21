import React, { Component } from 'react'

export class Location extends Component {
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
                <button onClick={this.continue}>Next</button> 
                <br />
                <br />
                <button onClick={this.back}>Back</button> 
                <p>{this.props.values.loc}</p>
            </div>
            )
      }
}

export default Location
