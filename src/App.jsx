import React from 'react';
import './App.css';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.svg';
import illustration from './illustration.svg';

function App() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li><a className="logoimg" href="#logoimg"><img src={logo} alt="Logo" /></a></li>
          <li><a className="logo" href="#logo">Powernet</a></li>
          <li><a href="#services">Planos</a></li>
          <li><a href="#support">Suporte</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
      <header className="header">
         <div> <h1>Internet rápida e confiável!</h1>
          <p>Temos o plano certo para a sua necessidade</p>
          <div className='buttons'>
          <button className="round-button">Plano 50MB</button>
          <button className="round-button">Plano 250MB</button>
          <button className="round-button">Plano 500MB</button>
          </div></div>
          <div className='illustration'><img src={illustration} alt="illustration" /></div>
      </header>
      <main className="main">
        <section id="services" className="section">
          <h2>Nossos planos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sapiente nostrum in numquam.</p>
        </section>
        <section id="support" className="section">
          <h2>Suporte</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis libero aperiam harum maxime.</p>
        </section>
         <section id="about" className="section">
          <h2>Sobre a Powernet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ab, iste eveniet neque ex repellendus nobis in consequuntur ratione odio. Impedit molestiae in odio adipisci laudantium! Ducimus architecto excepturi sint.</p>
        </section>
        </main>
        <footer id="contact" className="section">
          <h2>Contato</h2>
          <div className="contact-icons">
            <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            
          </div>
        </footer>
      
    </div>
  );
}

export default App;
