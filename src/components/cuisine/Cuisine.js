import React, { Component } from 'react'
import BackButton from '../common/BackButton'
import NextButton from '../common/NextButton'
import SelectionButton from '../common/SelectionButton'


export class Cuisine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chinese: 0,
            korean: 0,
            western: 0,
            japanese: 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }  
     

    render() {
        return (
            <div>
                <p> Me no like this</p>
                
                <br />
                <label>
                    Chinese
                    <input 
                    name = "vetoChinese"
                    type = "checkbox" 
                    checked = {this.props.vetoChinese} 
                    onChange = {this.props.handleInputChange} />
                </label>
                <label>
                    Korean
                    <input 
                    name = "vetoKorean"
                    type = "checkbox" 
                    checked = {this.props.vetoKorean} 
                    onChange = {this.props.handleInputChange} />
                </label>
                <label>
                    Western
                    <input 
                    name = "vetoWestern"
                    type = "checkbox" 
                    checked = {this.props.vetoWestern} 
                    onChange = {this.props.handleInputChange} />
                </label>
                <label>
                    Japanese
                    <input 
                    name = "vetoJapanese"
                    type = "checkbox" 
                    checked = {this.props.vetoJapanese} 
                    onChange = {this.props.handleInputChange} />
                </label>
                <br />
               
                <NextButton 
                    nextStep = {this.props.nextStep}
                    />
                <br />
                <BackButton 
                    prevStep = {this.props.prevStep}
                    />
            </div>
        )
    }
}

export default Cuisine
