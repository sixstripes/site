import React from 'react';
import ReactGA from 'react-ga';

import './assets/App.scss';
import brandBg from './assets/images/brand-bg.png';
import arrow from './assets/images/arrow.svg';

ReactGA.initialize('ID');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <h1>Pronto para descobrir as faixas?</h1>
        <img src={brandBg} alt="Six Stripes" />
      </header>
      <main className="section-main">
        <p>Em breve, este será um espaço para você descobrir a representatividade LGBTQ ao redor do mundo em seis categorias, seis faixas, seis cores.</p>
        <div className="bar"></div>
      </main>
      <footer className="main-footer">
        <p className="mail" href="mailto:hello@sixstripes.be">
          Se inscreva para receber novidades
          <img src={arrow} alt="Se inscreva para receber novidades" />
        </p>
        <a className="mail" href="mailto:hello@sixstripes.be">hello@sixstripes.be</a>
      </footer>
    </div>
  );
}

export default App;
