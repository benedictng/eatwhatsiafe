import Box from '@mui/material/Box'

const FormHeading = ({ heading, showErrMsg, boxStyles = {} }) => (
    <Box sx={{ 'margin-bottom': '26px', ...boxStyles }}>
        { (heading !== null) ? <h1>{heading}</h1> : null }
        { showErrMsg ? <p style={{ color: 'red' }}>**please select something</p> : null }
    </Box>
)

export default FormHeading
