  import React, { Component } from 'react'
  
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
                <button type="button" onClick = {this.continue}>Create food room</button>
                </div>
            )
      }
  }
  
  export default Entrance
  