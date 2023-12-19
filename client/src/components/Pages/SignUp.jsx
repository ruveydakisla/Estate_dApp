// SignUp.js

import React from 'react';
import './Css/SignUp.css';
import Navbar from './Navbar';

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <div className="Selams">
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form>
            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="input-group">
              <label htmlFor="surname">Surname:</label>
              <input type="text" id="surname" name="surname" required />
            </div>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="input-group">
              <label>User Type:</label>
              <select id="userType" name="userType" required>
                <option value="tenant">Tenant</option>
                <option value="realtor">Realtor</option>
              </select>
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
