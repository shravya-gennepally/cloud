import logo from './logo.svg';
import './App.css';
import TextToSpeech from './TextToSpeech';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextToSpeech />} />
        


      </Routes>
    </BrowserRouter>
  );
}

export default App;
