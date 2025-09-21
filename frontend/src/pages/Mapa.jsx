import React from "react";
import { Link } from "react-router-dom";
import '../styles/MapaFeira.scss';

function MapaFeira() {
  return (
    <div className="mapa-feira">
      <section className="banner">
        <h1>Mapa da Feira</h1>
        <p>Navegue pelos diferentes espaços da feira e descubra todas as atividades disponíveis em cada andar</p>
      </section>

      <section className="intro">
        <h2>Explore todos os espaços</h2>
        <p>Navegue pelos diferentes espaços da feira e descubra todas as atividades disponíveis em cada andar</p>
      </section>

      <section className="andares">
        <h3>Vista geral do prédio</h3>
        <div className="card azul">
          <span>1º</span>
          <div>
            <h4>Tecnologia</h4>
            <p>Laboratórios / Programação / Robótica</p>
          </div>
          <p className="horario">08:00 - 16:00</p>
        </div>

        <div className="card laranja">
          <span>2º</span>
          <div>
            <h4>Engenharia</h4>
            <p>Projetos / Estruturas / Automação</p>
          </div>
          <p className="horario">09:00 - 16:00</p>
        </div>

        <div className="card rosa">
          <span>3º</span>
          <div>
            <h4>Gestão e Design</h4>
            <p>Administração / Comunicação Visual</p>
          </div>
          <p className="horario">09:00 - 16:00</p>
        </div>

        <div className="card verde">
          <div>
            <h4>Entrada</h4>
            <p>Recepção, credenciamento, informações gerais.</p>
          </div>
          <p className="horario">08:00 - 16:00</p>
        </div>

        <div className="extras">
          <div className="sala-ingles">
            <h4>Salas de Inglês</h4>
            <p>Ala lateral - 09h - 17h</p>
          </div>
          <div className="palestras">
            <h4>Palestras</h4>
            <p>Espaço Principal - 09h - 17h</p>
          </div>
        </div>
      </section>

      <section className="dicas">
        <h3>Como aproveitar melhor a feira?</h3>
        <div className="cards-dica">
          <div className="dica">
            <h4>Chegue Cedo</h4>
            <p>Garanta lugar nas palestras mais concorridas</p>
          </div>
          <div className="dica">
            <h4>Use o QR Code</h4>
            <p>Navegue com facilidade pelos espaços</p>
          </div>
          <div className="dica">
            <h4>Planeje seu Roteiro</h4>
            <p>Defina seus horários e cursos favoritos</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="botoes-hero">
          <h1>Pronto para explorar?</h1>
          <h2>Cadastre-se na feira e receba seu QR code</h2>
          <Link to="/cadastro" className="botao">Cadastrar-se</Link>
        </div>
      </footer>
    </div>
  );
}

export default MapaFeira;