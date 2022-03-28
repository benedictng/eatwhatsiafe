import Box from '@mui/material/Box'

const FormHeading = ({ heading, showErrMsg, boxStyles = {} }) => (
    <Box sx={{ ...{ 'margin-bottom': '48px', mt: 15 }, ...boxStyles }}>
        <h1>{heading}</h1>
        { showErrMsg ? <p style={{ color: 'red' }}>**please select something</p> : null }
    </Box>
)

export default FormHeading
