import React from 'react';
import './Css/index.css';
import Navbar from './Navbar';

export default function Index() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="welcome-container">
        <header className="welcome-header">
          <h1>Hoş Geldiniz!</h1>
          <p>
            Smart Contract ile Kiracı ve Ev Sahibi arasında kiralama yapan
            sözleşme oluşturan bir siteye hoş geldiniz.
          </p>
        </header>
        <section className="project-info">
          <h2>Proje Hakkında</h2>
          <p>
            Bu platform, MetaMask kullanarak Bitcoin adresi ile Ethereum
            göndererek kiralama işlemlerini gerçekleştirmenize olanak tanır.
            Kiracılar ve ev sahipleri arasında güvenilir ve şeffaf kiralama
            sözleşmeleri oluşturabilirsiniz.
          </p>
          {/* İhtiyacınıza göre daha fazla bilgi ekleyebilirsiniz */}
        </section>
      </div>
    </div>
  );
}
