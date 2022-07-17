import Typography from '@mui/material/Typography'

const EwsH0 = ({ children }) => <Typography variant="h0">{children}</Typography>
const EwsH1 = ({ children }) => <Typography variant="h1">{children}</Typography>
const EwsH2 = ({ children }) => <Typography variant="h2">{children}</Typography>
const EwsH3 = ({ children }) => <Typography variant="h3">{children}</Typography>
const EwsP = ({ children }) => <Typography variant="p">{children}</Typography>
const EwsP2 = ({ children }) => <Typography variant="p2">{children}</Typography>
const EwsSubtitle = ({ children }) => <Typography variant="subtitle">{children}</Typography>

export {
    EwsH0,
    EwsH1,
    EwsH2,
    EwsH3,
    EwsP,
    EwsP2,
    EwsSubtitle,
}
