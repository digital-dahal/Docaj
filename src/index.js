import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorModeScript } from '@chakra-ui/react'
import theme from "./presentation/theme";
// Pdf viewer
import '@react-pdf-viewer/core/lib/styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorModeName}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
