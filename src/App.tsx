import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Liste from './Components/Liste';
import Focus from './Components/Focus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Liste />} />
        <Route path="/focus" element={<Focus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
