import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './components/MainPage';
import SingleArticle from './components/SingleArticle';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
