import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App'
import { AppProvider } from './context'
import { BrowserRouter as Router } from 'react-router-dom'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
)
