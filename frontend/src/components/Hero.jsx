import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.scss';

function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>
          5<sup>ª</sup> feira de profissões
        </h1>

        <h2>Instituto Nossa Senhora de Fátima</h2>

        <p>Esforço que transforma orgulho que permanece</p>

        <div className="hero-buttons">
          <Link to="/sobre" className="btn btn-outline">Saber mais</Link>
          <Link to="/cadastro" className="btn btn-primary">Se inscrever</Link>
        </div>

        <div className="evento-info">
          <h3>Feira de Profissões 2025</h3>
          <p>27 de setembro | 9h às 16h</p>
          <p>Instituto Nossa Senhora de Fátima - Veleiros</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
