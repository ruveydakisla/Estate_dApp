import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Css/navbar.css'; // Stil dosyasını ekleyin
import { useEth } from '../../contexts/EthContext';

const Navbar = () => {
  const [userType, setUserType] = useState();
  const {
    state: { contract, accounts },
  } = useEth();

  // useEffect(() => {
  //   const getUserType = async () => {
  //     try {
  //       const data = await contract.methods.users(accounts[0]).call({ from: accounts[0] });
  //       setUserType(data[2]);
  //       console.log(data[2]);
  //     } catch (error) {
  //       console.error('Error fetching user type:', error);
  //     }
  //   };

  //   getUserType();
  // }, [accounts, contract]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">GreenContract4go</div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/Estate">Estate</Link>

          {/* Add the following condition to display or hide the "Property Add" link based on user type */}
          {/* {userType === 1 && <Link to="/PropertyAdd">Property Add</Link>} */}
          <Link to="/PropertyAdd">Property Add</Link>
          <Link to="/tenantAdd">Tenant Add</Link>
          <Link to="/tenantSell">Tenant Sell</Link>
          <Link to="/signIn">Sign In</Link>
          <Link to="/signUp">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
