import React from 'react';
import './Css/signIn.css';
import { useEth } from '../../contexts/EthContext';

export default function SignOut() {
  const { state: { contract, accounts }, setEthState } = useEth();

  const logout = async () => {
    try {
      await window.ethereum.enable(); // Metamask ekranı geliyor.
      const result = await contract.methods.logout().send({ from: accounts[0] });
      console.log(result);

      // Kullanıcı çıkış yaptığında state'i güncelle
      setEthState(prevState => ({ ...prevState, login: false, userType: null }));
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="sign-In">
      <div className="Selams">
        <div className="signup-container">
          <button className="btn-signIn" onClick={logout}>
            <div>
              <div className="txt-btn">Sign Out</div>
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
