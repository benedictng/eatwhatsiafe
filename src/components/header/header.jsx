import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

const LogoPic = () => (
    <img className="App-logo" src="/logomain.png" alt="" />
);

const HamburgerMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const isOpen = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={isOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                color="inherit"
                onClick={handleClick}
            >
                <MenuIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem component={Link} to="/">Home</MenuItem>
                <MenuItem component={Link} to="/about">About Us</MenuItem>
                <MenuItem component={Link} to="/contact">Feedback</MenuItem>
            </Menu>
        </div>
    )
}

const HeaderButtons = () => (
    <>
        <HeaderButton link="/">Home</HeaderButton>
        <HeaderButton link="/about">About Us</HeaderButton>
        <HeaderButton link="/contact">Feedback</HeaderButton>
    </>
)

const Header = () => {
    const isMinWidth = useMediaQuery('(min-width:600px)')

    return (
        <Box sx={{ flexGrow: 1, mb: 1 }}>
            <Toolbar>
                <LogoPic />
                <div style={{ flexGrow: 1 }} />
                { isMinWidth ? <HeaderButtons /> : <HamburgerMenu /> }
            </Toolbar>
        </Box>
    )
}

const HeaderButton = ({ children, link }) => (
    <Button
        href={link}
        color="inherit"
        sx={{
            whiteSpace: 'pre',
            minWidth: 'fit-content',
        }}
    >
        {children}
    </Button>
)

export default Header
