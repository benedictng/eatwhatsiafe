/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import OPTIImprovNewWideNine from './fonts/OPTIImprovNewWideNine.otf'
import ComforterBrush from './fonts/ComforterBrush-Regular.ttf'

    // <link
    //     rel="stylesheet"
    //     href="https://fonts.googleapis.com/css?family=Poppins"
    // />;
const theme = createTheme({
    typography: {
    fontFamily: 'OPTIImprovNewWideNine',
    }
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme = {theme}>
          <App />
        </ThemeProvider>

    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
