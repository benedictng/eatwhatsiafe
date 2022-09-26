import BottomNavigation from '@mui/material/BottomNavigation';
import { Box } from '@mui/material';
import './footer.css'
import { EwsSubtitle } from 'components/common/typography/text-components';
import colors from 'common/colors';

const Footer = () => (
    <>
        <BottomNavigation sx={{
            position: 'fixed', bottom: 0, left: 0, right: 0, 'background-color': colors.turquoise,
        }}
        >
            <Box px={5} py={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <EwsSubtitle sx={{ margin: 'auto' }}>
                    made with ❤️; if you like what we do,
                    {' '}
                    <a href="https://ko-fi.com/eatherelah">buy us a ☕️ or 🍜</a>
                </EwsSubtitle>
            </Box>
        </BottomNavigation>
    </>
);

export default Footer;
