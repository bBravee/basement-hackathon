import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './index.css';
import App from './App';
import PlayOffs from './components/PlayOffs'
import reportWebVitals from './reportWebVitals';
import TournamentInfo from './components/TournamentInfo';
import LogInForm from './components/LogInForm';
import Testing from './components/Testing';
import ApiReturns from './components/ApiReturns'


ReactDOM.render(
<React.StrictMode>
  <Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<PlayOffs />} />
    <Route path="/info" element={<TournamentInfo />} />
    <Route path="/login" element={<LogInForm />} />
    <Route path="/testing" element={<Testing/>} />
    <Route path="/apireturns" element={<ApiReturns/>} />
    <Route path="drabinka" element={<Testing/>} />
  </Routes>
  </Router>
    </React.StrictMode>,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
