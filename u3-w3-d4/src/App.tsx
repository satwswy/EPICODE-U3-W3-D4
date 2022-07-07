import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './components/MainPage';
import SingleArticle from './components/SingleArticle';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound';
import Details from './components/Details';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Articles" element={<MainPage />} />
          <Route path="/details/:movieId" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
