import React from 'react';
import "../styles/Highlights.scss";

function Highlights() {
  return (
    <section className="highlights">
      <h2>Sobre a Feira de Profissões</h2>
      <p>
        A Feira de Profissões do Instituto Nossa Senhora de Fátima conecta estudantes e a comunidade ao mundo das carreiras técnicas. Conheça cursos, participe de oficinas e descubra novas vocações para planejar seu futuro profissional.
      </p>
      <div className="highlights__cards">
        <div className="card">
          <img src="/assets/images/visitante.png" alt="Visitantes"/>
          <h3>+3.000 Visitantes</h3>
          <p>Alunos e visitantes visitam nossa feira todos os anos.</p>
        </div>
        <div className="card">
          <img src="/assets/images/profissao.png" alt="Cursos"/>
          <h3>6 Cursos Técnicos</h3>
          <p>Cursos pensados para inserir você no mercado de trabalho e alavancar seu futuro.</p>
        </div>
        <div className="card">
          <img src="/assets/images/tradicao.png" alt="Tradição"/>
          <h3>+50 anos de tradição</h3>
          <p>Formando mais do que profissionais, pessoas.</p>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
