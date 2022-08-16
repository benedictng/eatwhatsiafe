import Box from '@mui/material/Box';

const GreyTextHighlightBox = ({ children }) => (
    <Box sx={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        p: 1,
        mx: 0.3,
        borderRadius: '5px',
    }}
    >
        {children}
    </Box>
)

export default GreyTextHighlightBox
