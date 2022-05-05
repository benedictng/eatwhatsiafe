// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const LogoPic = () => (
    <img className="App-logo" src="/logomain.png" alt="" />
);

const Header = () => (
    <Box sx={{ flexGrow: 1, mt: 5, mb: 5 }}>
        <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <LogoPic />
            <Typography
                variant="h6"
                color="inherit"
                component="div"
                sx={{ flexGrow: 20, textAlign: 'left' }}
            />
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Button color="inherit" sx={{ flexGrow: 1 }}>Home</Button>
            </Link>
            <Button color="inherit" sx={{ flexGrow: 1 }}>About Us</Button>
            <Button color="inherit" sx={{ flexGrow: 1 }}>Feedback</Button>
        </Toolbar>
    </Box>
)

export default Header
