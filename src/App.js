import 'App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from 'components/landing-page';
import ExampleApiCall from 'components/common/example-api-call';
import UserForm from 'components/user-form';
import Room from 'components/room';
import FoodSelectionPage from './components/food-selection';
import { Results } from './components/results/results';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/preferences' component={UserForm} />
          <Route path='/results' component={Results} />
          <Route path='/restaurant-details' component={FoodSelectionPage} />
          <Route path='/create-room' component={UserForm} />
          <Route path='/example-api-call' component={ExampleApiCall} />
          <Route
            path='/room/:roomCode/selection'
            component={FoodSelectionPage}
          />
          <Route path='/room/:roomCode' component={Room} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
