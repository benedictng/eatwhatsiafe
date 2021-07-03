import 'App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from 'components/landing-page';
import { UserForm } from 'components/user-form/UserForm';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><LandingPage /></Route>
          <Route path='/preferences'><UserForm /></Route>
          {/* <Route path='/restaurant-details'></Route> */}
          <Route path='/create-room' component={UserForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
