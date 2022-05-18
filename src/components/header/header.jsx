import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const LogoPic = () => (
    <img className="App-logo" src="/logomain.png" alt="" />
);

const Header = () => (
    <Box sx={{ flexGrow: 1, mt: 5, mb: 5 }}>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <LogoPic />
            <div style={{ flexGrow: 1 }} />
            <HeaderButton link="/">Home</HeaderButton>
            <HeaderButton link="/about">About Us</HeaderButton>
            <HeaderButton link="/contact">Feedback</HeaderButton>
        </Toolbar>
    </Box>
)

const HeaderButton = ({ children, link }) => (
    <Button
        href={link}
        color="inherit"
        sx={{
            'white-space': 'pre',
            'min-width': 'fit-content',
        }}
    >
        {children}
    </Button>
)

export default Header
