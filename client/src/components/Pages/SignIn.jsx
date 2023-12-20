import React from 'react';
import './Css/signIn.css';
import './images/icons8-metamask-logo-48.png';

export default function SignIn() {
  return (
    <div className="sign-In">
      <div className="Selams">
        <div className="signup-container">
          <button className="btn-signIn">
            <div>
              <div className="txt-btn">Sign In with Metamask</div>
              <div className="img-logo">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-metamask-2728406-2261817.png?f=webp&w=512"
                  alt="Metamask Logo"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
