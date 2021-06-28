import 'App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from 'components/landing-page';
import { UserForm } from 'components/user-form/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FoodSelectionPage from "./components/food-selection";
import LandingPage from "./components/landing-page";
import { UserForm } from "./components/user-form/UserForm";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
