import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './index.css';
import App from './App';
import PlayOffs from './components/PlayOffs'
import reportWebVitals from './reportWebVitals';
import LogInForm from './components/LogInForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Router>
<Routes>
  <Route path="/" element={<App />} />
  <Route path="/about" element={<PlayOffs />} />
  <Route path="/login" element={<LogInForm />} />
</Routes>
</Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
