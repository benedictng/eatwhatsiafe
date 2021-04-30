  import React, { Component } from 'react'
  import NextButton from '../common/NextButton'

  export class Entrance extends Component {
        continue = e => {
            this.props.handleChange('size');
            e.preventDefault();
            this.props.nextStep();
            }

        render() {
            return (
                <div>
                <p> Eatwhatsia... </p>
                <p> Dont beta, force your friends to decide together lah</p>
                <NextButton 
                        nextStep = {this.props.nextStep}
                    />
                </div>
            )
      }
  }
  
  export default Entrance
  