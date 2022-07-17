import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = responsiveFontSizes(
    createTheme({
        typography: {
            fontFamily: 'OPTIImprovNewWideNine',
            h0: {
                fontSize: '5rem',
                lineHeight: 1.5,
            },
            h1: {
                fontSize: '1.75rem',
                lineHeight: 1.4,
            },
            h2: {
                fontSize: '1.25rem',
            },
            h3: {
                fontSize: '1rem',
                lineHeight: 1.5,
            },
            p: {
                fontFamily: 'soleil,sans-serif',
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: '1.33rem',
            },
            p2: {
                fontFamily: 'soleil,sans-serif',
                fontWeight: 400,
                fontSize: '0.875rem',
            },
            subtitle: {
                fontFamily: 'soleil,sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
            },
        },
    }),
)

export default theme;
