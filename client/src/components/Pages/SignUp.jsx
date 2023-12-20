// SignUp.js
import React, { useState } from 'react';
import './Css/SignUp.css';
import Navbar from './Navbar';
import { useEth } from '../../contexts/EthContext';
const SignUp = () => {
  const [username, setUserName] = useState('');
  const [usertype, setUserType] = useState('');
  const {
    state: { contract, accounts },
  } = useEth();

  const register = async () => {
    const result=await contract.methods
      .register(username,1)
      .send({ from: accounts[0] });
    console.log(result);
  };
  return (
    <div>
      <div className="Selams">
        <div className="signup-container">
          <h2>Sign Up</h2>
          
            {/* <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="input-group">
              <label htmlFor="surname">Surname:</label>
              <input type="text" id="surname" name="surname" required />
            </div> */}
            <div
              className="input-group"
              onChange={(t) => setUserName(t.target.value)}
              value={username}
            >
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="input-group">
              <label>User Type:</label>
              <select
                id="userType"
                name="userType"
                required
                onChange={(t) => setUserType(t.target.value)}
                value={usertype}
              >
                <option value="tenant">Tenant</option>
                <option value="realtor">Realtor</option>
              </select>
            </div>

            <button className='btn-signUp' onClick={register}>
               Sign Up
            </button>
         
        </div>
      </div>
    </div>
  );
};

export default SignUp;
