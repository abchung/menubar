import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { WindowProvider } from './context/WindowContext';

ReactDOM.render(
  <React.StrictMode>
    <WindowProvider>
      <App />
    </WindowProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
