import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './assets/fonts/Ubuntu/Ubuntu-Bold.ttf';
import './assets/fonts/Ubuntu/Ubuntu-Regular.ttf';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalContextProvider } from './Hooks/ContextModal';
import { ContextProvider } from './Hooks/ContextForm';
import { ModalGraciasContextProvider } from './Hooks/ContextGracias';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalGraciasContextProvider>
    <ModalContextProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ModalContextProvider>
    </ModalGraciasContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
