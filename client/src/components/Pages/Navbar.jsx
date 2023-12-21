import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Css/navbar.css'; // Stil dosyasını ekleyin
import { useEth } from '../../contexts/EthContext';

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const {
    state: { contract, accounts },
  } = useEth();

  useEffect(() => {
    const getUserType = async () => {
      try {
        const data = await contract.methods
          .users(accounts[0])
          .call({ from: accounts[0] });
        setLogin(data[3]);
        console.log(data[3]);
      } catch (error) {
        console.error('Error fetching user type:', error);
      }
    };

    getUserType();
  }, [accounts, contract]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">GreenContract4go</div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/Estate">Estate</Link>

          {/* Add the following condition to display or hide the "Property Add" link based on user type */}
          
              <Link to="/PropertyAdd">Property Add</Link>
              <Link to="/Estate">Estate</Link>
              <Link to="/signOut">signOut</Link>
              
           
            
              <Link to="/signIn">Sign In</Link>
              <Link to="/signUp">Sign Up</Link>
            
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
