import "App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "components/landing-page";
import ExampleApiCall from "components/common/example-api-call";
import UserForm from "components/user-form";
import Status from "components/room-status";
import FoodSelectionPage from "./components/food-selection";
import { Results } from "./components/results/results";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/preferences">
            <UserForm />
          </Route>
          <Route path="/restaurant-details">
            <FoodSelectionPage />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/create-room" component={UserForm} />
          <Route path="/example-api-call" component={ExampleApiCall} />
          <Route path="/room/:roomCode" component={Status} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
