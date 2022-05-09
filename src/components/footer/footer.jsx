import BottomNavigation from '@mui/material/BottomNavigation';
import { Box } from '@mui/material';

const Footer = () => (
    <>
        <BottomNavigation sx={{
            position: 'fixed', bottom: 0, left: 0, right: 0, 'background-color': '#9FEADD',
        }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <h3 sx={{ margin: 'auto' }}>made with love; if you like what we do, buy us a coffee</h3>
            </Box>
        </BottomNavigation>
    </>
);

export default Footer;
