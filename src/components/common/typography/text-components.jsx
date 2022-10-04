import Typography from '@mui/material/Typography'

const EwsH0 = ({ children, ...props }) => (
    <Typography variant="h0" {...props}>{children}</Typography>
)
const EwsH1 = ({ children, ...props }) => (
    <Typography variant="h1" {...props}>{children}</Typography>
)
const EwsH2 = ({ children, ...props }) => (
    <Typography variant="h2" {...props}>{children}</Typography>
)
const EwsH3 = ({ children, ...props }) => (
    <Typography variant="h3" {...props}>{children}</Typography>
)
const EwsP = ({ children, ...props }) => (
    <Typography variant="p" {...props}>{children}</Typography>
)
const EwsP2 = ({ children, ...props }) => (
    <Typography variant="p2" {...props}>{children}</Typography>
)
const EwsSubtitle = ({ children, ...props }) => (
    <Typography variant="subtitle" {...props}>{children}</Typography>
)

export {
    EwsH0,
    EwsH1,
    EwsH2,
    EwsH3,
    EwsP,
    EwsP2,
    EwsSubtitle,
}
