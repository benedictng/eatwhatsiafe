/* eslint-disable */
import 'App.css';
import {
    useLocation,
    Link,
    BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import LandingPage from 'components/landing-page';
import ExampleApiCall from 'components/common/example-api-call';
import UserForm from 'components/user-form';
import Room from 'components/room';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import FoodSelectionPage from './components/food-selection';


function App() {
    return (
        <>
            <div className="App">
                <Router>
                    <Box sx={{ flexGrow: 1, mt: 5, mb: 5 }}>
                        <Toolbar variant="dense" sx={{ mx:10 }}>
                            <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 20, textAlign: 'left' }}>
                                EWS
                            </Typography>
                            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Button color="inherit" sx={{ flexGrow: 1 }}>Home</Button>
                            </Link>
                            <Button color="inherit" sx={{ flexGrow: 1 }}>About Us</Button>
                            <Button color="inherit" sx={{ flexGrow: 1 }}>Feedback</Button>
                        </Toolbar>
                    </Box>
                    <br />
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

export default App;
