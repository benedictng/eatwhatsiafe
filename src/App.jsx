/* eslint-disable */
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
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import FoodSelectionPage from './components/food-selection';

import Logo from './images/logo.PNG';

const LogoPic = (e) => {
	return ( 
        <div>
            <img src={Logo} alt=""/>
        </div>
    );
}
function App() {
    return (
      <>
        <div className="App">
            <Box sx={{ flexGrow: 1, mt: 5, mb: 3 }}>
                <Toolbar variant="dense" sx={{ mx:10 }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <LogoPic/>
                    <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 20, textAlign: 'left' }}>
                        <h3>EatHereLah</h3>
                    </Typography>
                    <Button color="inherit" sx={{ flexGrow: 1 }}>Home</Button>
                    <Button color="inherit" sx={{ flexGrow: 1 }}>About Us</Button>
                    <Button color="inherit" sx={{ flexGrow: 1 }}>Feedback</Button>
                </Toolbar>
            </Box>
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
          <BottomNavigation sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, 'background-color': '#9FEADD' }}>
            <p className="subtitle">made with love; if you like what we do, buy us a CROISSANT</p>
          </BottomNavigation>
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
