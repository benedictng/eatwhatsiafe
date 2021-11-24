import 'App.css';
import {
    BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import LandingPage from 'components/landing-page';
import ExampleApiCall from 'components/common/example-api-call';
import UserForm from 'components/user-form';
import Room from 'components/room';
import FoodSelectionPage from './components/food-selection';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/preferences" component={UserForm} />
                    <Route path="/create-room" component={UserForm} />
                    <Route path="/example-api-call" component={ExampleApiCall} />

                    <RequireNameRoute
                        path="/room/:roomCode/selection"
                        component={<FoodSelectionPage />}
                    />
                    <RequireNameRoute
                        path="/room/:roomCode"
                        component={<Room />}
                    />
                </Switch>
            </Router>
        </div>
    )
}

const RequireNameRoute = ({ component, ...rest }) => (
    <Route
        {...rest}
        render={(_) => (window.sessionStorage.getItem('name') ? (
            component
        ) : (
            <Redirect to="/" />
        ))}
    />
)

export default App;
