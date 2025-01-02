import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for ReactDOM
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css'; // Import Tailwind CSS here


// Get the root element from the HTML file
const rootElement = document.getElementById('root');

// Create a React root and render the application
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
