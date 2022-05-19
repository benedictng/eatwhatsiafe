import BottomNavigation from '@mui/material/BottomNavigation';
import { Box } from '@mui/material';

const Footer = () => (
    <>
        <BottomNavigation sx={{
            position: 'fixed', bottom: 0, left: 0, right: 0, 'background-color': '#9FEADD',
        }}
        >
            <Box px={5} py={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <h3 sx={{ margin: 'auto' }}>
                    made with ❤️; if you like what we do,
                    {' '}
                    <a href="https://ko-fi.com/eatherelah">buy us a ☕️ or 🍜</a>
                </h3>
            </Box>
        </BottomNavigation>
    </>
);

export default Footer;
