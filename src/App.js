import 'App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from 'components/landing-page';
import ExampleApiCall from 'components/common/example-api-call';
import UserForm from 'components/user-form';
import Status from 'components/status';


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
          <Route path='/room/:roomCode' component={Status} />
          <Route path='/example-api-call' component={ExampleApiCall} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
