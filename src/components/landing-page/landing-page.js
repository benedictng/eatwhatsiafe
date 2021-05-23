import React from "react";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <Link to="/preferences">User Form (Ben)</Link>
        <div />
        <Link to="/restaurant-details">Restaurant Details (Alexis)</Link>
      </div>
    );
  }
}

export default LandingPage;
