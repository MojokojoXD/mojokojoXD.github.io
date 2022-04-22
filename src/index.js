import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './App';

const docRoot = createRoot(document.getElementById('root'))

docRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

