import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EthProvider } from './contexts/EthContext';
import Index from './components/Pages/Index';

import SignUp from './components/Pages/SignUp';
import Navbar from '../src/components/Pages/Navbar';
import SignIn from './components/Pages/SignIn';

function App() {
  return (
    <EthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route  path="/"  element={<Index />} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/signIn" element={<SignIn/>} />

          {/* Add more routes as needed */}
          {/* For example: <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </EthProvider>
  );
}

export default App;
