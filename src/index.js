import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorModeScript } from '@chakra-ui/react'
import theme from "./presentation/theme";
ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorModeName}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
