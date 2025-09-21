
import React from 'react';
import '../styles/Courses.scss';

const courses = [
  {
    title: 'Automação residencial e robótica',
    description: 'Aprenda a programar dispositivos inteligentes, controlar sistemas automatizados e desenvolver projetos com robótica voltada para residências e ambientes modernos.',
    image: '/assets/images/automacao.png',
  },
  {
    title: 'Informática',
    description: 'Aprenda a usar o computador com segurança, dominando ferramentas como Word, Excel, banco de dados, noções de manutenção e programação básica para o dia a dia e o mercado de trabalho.',
    image: '/assets/images/informatica.png',
  },
  {
    title: 'Eletromecânica',
    description: 'Formação prática que une elétrica e mecânica, preparando você para atuar na manutenção, montagem e operação de sistemas e máquinas industriais.',
    image: '/assets/images/eletromecanica.png',
  },
  {
    title: 'Administração',
    description: 'Desenvolva habilidades em gestão, liderança, finanças e empreendedorismo, preparando-se para atuar em empresas, negócios próprios ou cargos administrativos.',
    image: '/assets/images/adm.png',
  },
  {
    title: 'Inglês',
    description: 'Aprenda a se comunicar em inglês com confiança, desenvolvendo habilidades de leitura, escrita, escuta e fala para uso pessoal, profissional ou acadêmico.',
    image: '/assets/images/ingles.png',
  },
  {
    title: 'Comunicação Visual',
    description: 'Aprenda a criar peças gráficas e visuais impactantes, dominando design, tipografia, cores e softwares para expressar ideias de forma criativa e profissional.',
    image: '/assets/images/cv.png',
  },
];

function Courses() {
  return (
    <section className="courses">
      {courses.map(({title, description, image}, index) => (
        <div key={index} className="course">
          <img src={image} alt={title} />
          <div className="course__content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Courses;