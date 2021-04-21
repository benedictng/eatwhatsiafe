import React, { Component } from 'react'

export class Cuisine extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { handleChange } = this.props;
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
                        <button onClick={this.continue}>Submit</button>
                </form>
                <br />
                <button onClick={this.back}>Back</button>
                <p>{this.props.values.size}</p>
            </div>
        )
    }
}

export default Cuisine
