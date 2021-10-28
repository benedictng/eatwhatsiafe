import 'App.css';
import {
    BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import LandingPage from 'components/landing-page';
import ExampleApiCall from 'components/common/example-api-call';
import UserForm from 'components/user-form';
import Room from 'components/room';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import FoodSelectionPage from './components/food-selection';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <AppBar position="static" style={{ 'margin-top': '76px' }}>
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        EWS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/preferences" component={UserForm} />
                    <Route path="/create-room" component={UserForm} />
                    <Route path="/example-api-call" component={ExampleApiCall} />
                    <RequireNameRoute path="/room/:roomCode/selection"><FoodSelectionPage /></RequireNameRoute>
                    <RequireNameRoute path="/room/:roomCode"><Room /></RequireNameRoute>
                </Switch>
            </Router>
        </div>
    )
}

const RequireNameRoute = ({ children, ...rest }) => (
    <Route
        {...rest}
        render={(_) => (window.sessionStorage.getItem('name') ? (
            children
        ) : (
            <Redirect to="/" />
        ))}
    />
)

export default App;
