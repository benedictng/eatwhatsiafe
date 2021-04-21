
  import React, { Component } from 'react'
  
  export class PartySize extends Component {
    continue = e => {
        this.props.handleChange('size');
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
                <p> We have a party of: </p>
                <form >
                <input 
                    list="partySize" 
                    placeholder = "party size"
                    onChange = {this.props.handleChange('size')}
                />
                    <datalist id="partySize">
                        <option value= "1" />
                        <option value= '2' />
                        <option value= '3' />
                        <option value= '4' />
                        <option value= '5' />
                        <option value= '6' />
                        <option value= '7' />
                        <option value= '8' />
                    </datalist>
                </form>
                <br />
                <button onClick={this.continue}>Next</button> 
                <br />
                <br />
                <button onClick={this.back}>Back</button> 
                <p>{this.props.values.size}</p>
            </div>
            )
      }
  }
  
  export default PartySize
  