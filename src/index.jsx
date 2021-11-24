/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import OPTIImprovNewWideNine from './fonts/OPTIImprovNewWideNine.otf'
import ComforterBrush from './fonts/ComforterBrush-Regular.ttf'

    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Poppins"
    />;

const theme = createTheme({
    typography: {
        fontFamily: 'OPTIImprovNewWideNine',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'OPTIImprovNewWideNine';
                    font-weight: 400;
                    src: local('OPTIImprovNewWideNine'), url(${OPTIImprovNewWideNine}) format('ttf');
                    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
            `,
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme = {theme}>
        </ThemeProvider>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
