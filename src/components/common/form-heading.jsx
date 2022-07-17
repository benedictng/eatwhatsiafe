import Box from '@mui/material/Box'
import { EwsH1, EwsP } from './typography/text-components'

const FormHeading = ({ heading, showErrMsg, boxStyles = {} }) => (
    <Box sx={{ 'margin-bottom': '26px', ...boxStyles }}>
        { (heading !== null) ? <EwsH1>{heading}</EwsH1> : null }
        { showErrMsg ? <EwsP style={{ color: 'red' }}>**please select something</EwsP> : null }
    </Box>
)

export default FormHeading
