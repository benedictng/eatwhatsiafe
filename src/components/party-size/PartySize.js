
import React, { Component } from 'react'
  
import BackButton from '../common/BackButton'
import NextButton from '../common/NextButton'

  
  export class PartySize extends Component {
    
    render() {
        return (
            <div>
                <p> We have a party of: </p>
               
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
                <br />
                <NextButton 
                        nextStep = {this.props.nextStep}
                    />
                <br />
                <br />
                <BackButton 
                        prevStep = {this.props.prevStep}
                    />
                <p>this.props.sizeValues.size = {this.props.sizeValues.size}</p>
                
            </div>
            )
      }
  }
  
  export default PartySize
  