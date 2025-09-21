import React from 'react';
import '../styles/Confirmacao.scss';

function Confirmacao() {
  return (
    <section className="confirmacao">
      <div className="confirmacao__container">
        <h2 className="confirmacao__titulo">Cadastro confirmado!</h2>
        <p className="confirmacao__subtitulo">
          Apresente este QR Code na entrada da feira
        </p>

        <div className="confirmacao__qrcode">
          <img src="/assets/images/Vector.png"/>
        </div>

        <h3 className="confirmacao__oque">O que fazer agora?</h3>
        <div className="confirmacao__steps">
          <div className="step">Guarde seu QR code</div>
          <div className="step">Apresente o QR code ao chegar na feira</div>
          <div className="step">Conheça a 5ª Feira de Profissões</div>
        </div>

        <div className="confirmacao__footer">
          <h3>Cadastro concluído</h3>
          <p>
            O Instituto Nossa Senhora de Fátima agradece sua presença para mostrar que o seu futuro está aqui!
          </p>
          <div className="confirmacao__buttons">
            <a href="/mapa" className="btn btn-yellow">Ver mapa da feira</a>
            <a href="/sobre" className="btn btn-outline">Ver programação</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Confirmacao;
