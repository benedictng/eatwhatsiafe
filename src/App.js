import 'App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
                <Route path='/create-room' component={UserForm} />
                <Route path='/example-api-call' component={ExampleApiCall} />
                <RequireNameRoute path='/room/:roomCode/selection'><FoodSelectionPage /></RequireNameRoute>
                <RequireNameRoute path='/room/:roomCode'><Room /></RequireNameRoute>
            </Switch>
            </Router>
        </div>
  )
}

const RequireNameRoute = ({children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={ _ => 
                window.sessionStorage.getItem('name') ? (
                    children
                ) : (
                    <Redirect to='/' />
                )
            } />
    )
}

export default App;
