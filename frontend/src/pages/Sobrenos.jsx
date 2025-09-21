import React from 'react';
import '../styles/Sobrenos.scss';

function Sobre() {
  return (
    <main className="sobre">
      <section className="fundacao">
        <h2>Fundação do instituto</h2>
        <div className="fundacao__content">
          <div className="fundacao__item">
            <h3>1971</h3>
            <p>Fundação Oficial</p>
            <span>O sonho se tornou realidade em 1971, quando Frei Xavier fundou o Instituto Social Nossa Senhora de Fátima...</span>
          </div>
          <div className="fundacao__item">
            <h3>Expansão</h3>
            <p>Futuros atingidos positivamente</p>
            <span>Com o tempo, o instituto expandiu suas ações, passando a oferecer também formação profissionalizante...</span>
          </div>
        </div>
      </section>

      <section className="legado">
        <h2>Legado itinerário</h2>
        <p>Além de seu trabalho social, Frei Xavier é autor de mais de 25 livros, que abordam temas como fé, espiritualidade, superação e missão.</p>
        <div className="legado__box">
          <h3>Lançamento 2024</h3>
          <p>"O Futuro Está a Bordo" <br />Uma reflexão profunda sobre empatia, transformação e o papel da educação na sociedade</p>
        </div>
      </section>

      <section className="impacto">
        <h2>Impacto</h2>
        <p>Décadas de dedicação transformando vidas e comunidades</p>
        <div className="impacto__cards">
          <div className="card">
            <h3>+ 100.000</h3>
            <p>Jovens formados</p>
          </div>
          <div className="card">
            <h3>+ 2.000</h3>
            <p>Alunos atualmente</p>
          </div>
          <div className="card">
            <h3>53</h3>
            <p>Anos de história</p>
          </div>
        </div>
      </section>

      <section className="mvv">
        <div className="mvv__item">
          <img src="/assets/images/missao.png" alt="Missão" />
          <h3>Missão</h3>
          <p>Promover a cidadania por meio da educação e qualidade de desenvolvimento integral...</p>
        </div>
        <div className="mvv__item">
          <img src="/assets/images/visao.png" alt="Visão" />
          <h3>Visão</h3>
          <p>Ser referência em educação técnica e formação humana, transformando vidas e contribuindo para uma sociedade mais justa e solidária.</p>
        </div>
        <div className="mvv__item">
          <img src="/assets/images/valores.png" alt="Valores" />
          <h3>Valores</h3>
          <p>Nossos valores são moral, ética, excelência, inovação, criatividade...</p>
        </div>
      </section>

      <section className="depoimento">
        <h2>Depoimento de ex-alunos</h2>
        <div className="depoimento__content">
          <img src="/assets/images/exaluno.png" alt="Ex-aluno" className="depoimento__foto" />
          <p>Em 2023, concluí o curso Técnico em Administração, onde conheci de fato o mercado de trabalho e desenvolvi habilidades para trabalhar em equipe e encontrar soluções. Em 2024, estou cursando Inglês Básico, que considero essencial para quem deseja ingressar no mercado. Graças ao meu desempenho em ambos os cursos, fui convidada a trabalhar no Instituto e sou muito grata a todos os colaboradores pelo apoio, dedicação e por acreditarem no meu potencial. <strong>Maria Eduarda Rodrigues da Silva – Cursos de Administração 2023 e Inglês Básico - Pré-Intermediário 2024</strong></p>
        </div>
      </section>
    </main>
  );
}

export default Sobre;
