/* eslint-disable */
import 'App.css'
import {
    BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom'
import LandingPage from 'components/landing-page'
import UserForm from 'components/user-form'

import Room from 'components/room'
import FoodSelectionPage from './components/food-selection'
import Header from 'components/header'
import PageNotFound from 'components/page-not-found'

function App() {

    return (
        <>
            <div className="App">
                <Router>
                    <Header />
                    <br />
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/preferences" component={UserForm} />
                        <Route path="/create-room" component={UserForm} />
                        <RequireNameRoute
                            path="/room/:roomCode/selection"
                            component={<FoodSelectionPage />}
                        />
                        <Route path="/room/:roomCode" component={Room} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </Router>
            </div>
        </>
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

export default App
