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
        //step decides which page of the form to show
        step: 1,
        
        //Party size
        size: 0,

        //cuisineSelected
        restChinese: false,
        restWestern: false,
        restJapanese: false,
        restKorean: false,
       
        //cuisineVeto
        vetoChinese: false,
        vetoWestern: false,
        vetoJapanese: false,
        vetoKorean: false,

        //location
        //1 = East
        //2 = West
        //3 = North
        loc: 0,
    }

    //handle change function from react tutorial
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
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

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    
      
        


    render() {
        const { step } = this.state;

        const { size, loc} = this.state;
        const sizeValues = { size };
        const locValues = { loc };

        const { restChinese, restWestern, restJapanese, restKorean } = this.state;
        const restValues = { restChinese, restWestern, restJapanese, restKorean }

        const { vetoChinese, vetoWestern, vetoJapanese, vetoKorean } = this.state;
        const vetoValues = { vetoChinese, vetoWestern, vetoJapanese, vetoKorean } 





        switch(step) {
            case 1: 
                return (
                    <Entrance 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                    />
                )
            case 2: 
                return ( 
                    <PartySize 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        handleInputChange = { this.handleInputChange}
                        sizeValues = {sizeValues}
                    />
                )
            case 3:
                return ( 
                    <Cuisine 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleInputChange = { this.handleInputChange}
                        vetoValues = {vetoValues}
                    />
                )
            case 4: 
                return (
                    <DietRestrict 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleInputChange = { this.handleInputChange}
                        restValues = {restValues}
                    />
                )
            case 5:
                return (
                    <Location 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    locValues = {locValues}
                />
                )
            case 6:
                //just to show state
                return (
                    <div>
                        <p>size {this.state.size}</p>
                        <p>loc {this.state.loc}</p>
                        <p>veto</p>
                        <label>
                            Chinese
                            <input 
                            name = "vetoChinese"
                            type = "checkbox" 
                            checked = {this.state.vetoChinese}  />
                        </label>
                        <label>
                            Korean
                            <input 
                            name = "vetoKorean"
                            type = "checkbox" 
                            checked = {this.state.vetoKorean}  />
                        </label>
                        <label>
                            Western
                            <input 
                            name = "vetoWestern"
                            type = "checkbox" 
                            checked = {this.state.vetoWestern} />
                        </label>
                        <label>
                            Japanese
                            <input 
                            name = "vetoJapanese"
                            type = "checkbox" 
                            checked = {this.state.vetoJapanese} />
                        </label>
                        <br />
                        <p>restricted</p>
                        <label>
                            Chinese
                            <input 
                            name = "restChinese"
                            type = "checkbox" 
                            checked = {this.state.restChinese} />
                        </label>
                         
                        <label>
                            Korean
                            <input 
                            name = "restKorean"
                            type = "checkbox" 
                            checked = {this.state.restKorean} />
                        </label>
                        <label>
                            Western
                            <input 
                            name = "restWestern"
                            type = "checkbox" 
                            checked = {this.state.restWestern} />
                        </label>
                        <label>
                            Japanese
                            <input 
                            name = "restJapanese"
                            type = "checkbox" 
                            checked = {this.state.restJapanese} />
                        </label>
                        <br />
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
