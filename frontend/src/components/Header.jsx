import React from 'react';
import '../styles/Header.scss'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="/assets/images/logo.png" alt="Logo" />
          <span>Feira de Profissões</span>
        </div>

        <nav className="header__nav">
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre nós</Link>
          <Link to="/mapa">Mapa da Feira</Link>
          <Link to="/cadastro">Cadastrar-se</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
