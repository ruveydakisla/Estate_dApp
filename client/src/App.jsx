import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EthProvider } from './contexts/EthContext';
import Index from './components/Pages/Index';

import SignUp from './components/Pages/SignUp';
import Navbar from '../src/components/Pages/Navbar';

function App() {
  return (
    <EthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route  path="/"  element={<Index />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* Add more routes as needed */}
          {/* For example: <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </EthProvider>
  );
}

export default App;
