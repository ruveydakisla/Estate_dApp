import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EthProvider } from './contexts/EthContext';
import Index from './components/Pages/Index';
import SignUp from './components/Pages/SignUp';
import Navbar from '../src/components/Pages/Navbar';
import PropertyAdd from './components/Pages/PropertyAdd';
import SignIn from './components/Pages/SignIn';
import Estate from './components/Pages/Estate';
import './styles.css';
import SignOut from './components/Pages/SignOut';
import MyContract from './components/Pages/MyContract';

function App() {
  return (
    <EthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/PropertyAdd" element={<PropertyAdd />} />
          <Route path="/MyContract" element={<MyContract />} />
          <Route path="/Estate" element={<Estate />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signOut" element={<SignOut />} />
          {/* Add more routes as needed */}
          {/* For example: <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </EthProvider>
  );
}

export default App;
