import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EthProvider } from './contexts/EthContext';
import Index from './components/Pages/Index';
import './styles.css';
import SignUp from './components/Pages/SignUp';
import Navbar from '../src/components/Pages/Navbar';
import PropertyAdd from './components/Pages/PropertyAdd';
import Estate from './components/Pages/Estate';

function App() {
  return (
    <EthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/PropertyAdd" element={<PropertyAdd />} />
          <Route path="/Estate" element={<Estate />} />
          {/* Add more routes as needed */}
          {/* For example: <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </EthProvider>
  );
}

export default App;
