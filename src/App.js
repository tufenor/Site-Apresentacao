import React from 'react';
import './App.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

import profileImage from './img/profile.jpg';

const portfolioData = {
  nome: 'Gabriel de Moura Pereira',
  idade: 28,
  faculdade: 'Uni-Goiás',
  curso: 'Análise e Desenvolvimento de Sistemas',
  experiencia: [
    {
      empresa: 'Colchoes Campinas',
      cargo: 'Auxiliar Administrativo',
      periodo: '2011 - 2013',
      descricao: 'Responsável por fornecer suporte e assistência nas tarefas administrativas de uma organização. Isso inclui a realização de atividades como gerenciamento de arquivos, organização de documentos, preparação de relatórios, atendimento telefônico, agendamento de reuniões e auxílio na administração geral do escritório.'
    },
    {
      empresa: 'Colchoes Campinas',
      cargo: 'Gerente',
      periodo: '2013 - 2016',
      descricao: 'Como gerente, minha função era liderar e gerenciar efetivamente uma equipe, garantindo que as metas e objetivos da organização sejam alcançados. Sou responsável por coordenar e supervisionar as atividades diárias, orientando os membros da equipe, definindo prioridades e alocando recursos de forma adequada.'
    },
    {
      empresa: 'AeG Colchoes',
      cargo: 'Proprietario',
      periodo: '2016 - 2023',
      descricao: 'Responsável por liderar, desenvolver estratégias e tomar decisões importantes para o sucesso do negócio.'
    }
  ],
  habilidades: ['HTML - (Basico)', 'CSS - (Basico)', 'JavaScript - (Iniciante)', 'React - (Iniciante)', 'Node.js - (Iniciante)'],
  contato: {
    email: 'tufenor@gmail.com',
    telefone: '(62) 98342-4695',
  }
};

function App() {
  return (
    <div className="app">
      <header>
        <img className="profile-image" src={profileImage} alt="Profile" />
        <h1>{portfolioData.nome}</h1>
        <div className="social-icons">
          <a href="https://www.facebook.com/gpereira123" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.instagram.com/tufenor" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/tufenor" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://wa.me/5562983424695" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
        </div>
      </header>

      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <section id="sobre">
        <h2>Sobre</h2>
        <p>Olá, meu nome é {portfolioData.nome}, tenho {portfolioData.idade} anos e estudo {portfolioData.curso} na {portfolioData.faculdade}. Estou buscando oportunidades de estágio na área de programação para aplicar meus conhecimentos e desenvolver minhas habilidades.</p>
      </section>

      <section id="experiencia">
        <h2>Experiência</h2>
        {portfolioData.experiencia.map((exp, index) => (
          <div key={index}>
            <h3>{exp.empresa}</h3>
            <h4>{exp.cargo}</h4>
            <p>{exp.periodo}</p>
            <p>{exp.descricao}</p>
          </div>
        ))}
      </section>

      <section id="habilidades">
        <h2>Habilidades</h2>
        <ul>
          {portfolioData.habilidades.map((habilidade, index) => (
            <li key={index}><a href="https://cursos.alura.com.br/user/tufenor/fullCertificate/3b7b7641cecc853fae6e416e33022894" target="_blank" rel="noopener noreferrer">{habilidade}</a></li>
          ))}
        </ul>
      </section>

      <section id="contato">
        <h2>Contato</h2>
        <p>Email: <a href={`mailto:${portfolioData.contato.email}`}>{portfolioData.contato.email}</a></p>
        <p>Telefone: <a href={`tel:${portfolioData.contato.telefone}`}>{portfolioData.contato.telefone}</a></p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} {portfolioData.nome}</p>
      </footer>
    </div>
  );
}

export default App;
