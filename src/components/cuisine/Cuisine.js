import React, { Component } from 'react'
import BackButton from '../common/BackButton'
import NextButton from '../common/NextButton'
import SelectionButton from '../common/SelectionButton'


export class Cuisine extends Component {

    state = {
        selectedChinese: false,
    }
    

    render() {
        const { handleChange } = this.props;
        const { handleChecked } = this.props;
        return (
            <div>
                <p> Me no like this</p>
                <form >
                        <select id="cuisineVeto" name="cuisineVeto" multiple onChange = {this.props.handleChange('cuisineVeto')}>
                            <option value="1">Chinese</option>
                            <option value="2">Western</option>
                            <option value="3">Japanese</option>
                            <option value="4">Korean</option>
                        </select>
                        <br />
                        <br />                                      
                </form>

                <button onclick= {this.props.handleChange('loc')}>
                    change loc value
                </button> 
                <br />

                <input type="checkbox" checked={this.props.selectedValues.selectedChinese} onChange = {this.props.handleChecked('selectedChinese')}/>
                <label>Chinese</label>
                <input type="checkbox" checked={this.props.selectedValues.selectedWestern} onChange = {this.props.handleChecked('selectedWestern')}/>
                <label>Western</label>
                <input type="checkbox" checked={this.props.selectedValues.selectedJapanese} onChange = {this.props.handleChecked('selectedJapanese')}/>
                <label>Japanese</label>
                <input type="checkbox" checked={this.props.selectedValues.selectedKorean} onChange = {this.props.handleChecked('selectedKorean')}/>
                <label>Korean</label>
                
                <NextButton 
                    nextStep = {this.props.nextStep}
                    />
                <br />
                <BackButton 
                    prevStep = {this.props.prevStep}
                    />

                <p>{this.props.selectedValues.selectedChinese}</p>
                <p>{this.props.values.loc}</p>

            </div>
        )
    }
}

export default Cuisine

/*<SelectionButton 
                    select = {this.props.handleSelect('selectedChinese')}
                    text = 'Chinese'
                    />*/