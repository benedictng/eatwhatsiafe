import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const fontFamilies = {
    headings: 'OPTIImprovNewWideNine',
    text: 'soleil,sans-serif',
}

const theme = responsiveFontSizes(
    createTheme({
        typography: {
            fontFamily: fontFamilies.text,
            h0: {
                fontFamily: fontFamilies.headings,
                fontSize: '5rem',
                lineHeight: 1.5,
            },
            h1: {
                fontFamily: fontFamilies.headings,
                fontSize: '1.75rem',
                lineHeight: 1.4,
            },
            h2: {
                fontFamily: fontFamilies.headings,
                fontSize: '1.25rem',
            },
            h3: {
                fontFamily: fontFamilies.headings,
                fontSize: '1rem',
                lineHeight: 1.5,
            },
            p: {
                fontFamily: fontFamilies.text,
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: '1.33rem',
            },
            p2: {
                fontFamily: fontFamilies.text,
                fontWeight: 400,
                fontSize: '0.875rem',
            },
            subtitle: {
                fontFamily: fontFamilies.text,
                fontSize: '1rem',
                fontWeight: 700,
            },
            button: {
                fontFamily: fontFamilies.headings,
            },
        },
    }),
)

export default theme;
