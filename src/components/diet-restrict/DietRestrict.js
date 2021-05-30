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
                <label>
                    Chinese
                    <input 
                    name = "restChinese"
                    type = "checkbox" 
                    checked = {this.props.restChinese} 
                    onChange = {this.props.handleInputChange} />
                </label>
                <label>
                    Korean
                    <input 
                    name = "restKorean"
                    type = "checkbox" 
                    checked = {this.props.restKorean} 
                    onChange = {this.props.handleInputChange} />
                </label>
                <label>
                    Western
                    <input 
                    name = "restWestern"
                    type = "checkbox" 
                    checked = {this.props.restWestern} 
                    onChange = {this.props.handleInputChange} />
                </label>
                <label>
                    Japanese
                    <input 
                    name = "restJapanese"
                    type = "checkbox" 
                    checked = {this.props.restJapanese} 
                    onChange = {this.props.handleInputChange} />
                </label>
                <br />
                <NextButton 
                        nextStep = {this.props.nextStep}
                    />                
                <br />
                <br />
                <BackButton 
                        prevStep = {this.props.prevStep}
                    />
            </div>
            )
      }
}

export default DietRestrict
