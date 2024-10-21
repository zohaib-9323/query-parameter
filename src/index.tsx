import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import App from './App';
import { TextProvider } from './components/TextContext';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <TextProvider>
        <Router>
          <App />
        </Router>
      </TextProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
