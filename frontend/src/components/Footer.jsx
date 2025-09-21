import { Instagram, Facebook, Linkedin } from 'lucide-react';
import '../styles/Footer.scss'
import React from 'react';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="conteudo-rodape">
                <div className='coluna1'>
                    <img className='logo-instituto' src="/assets/images/logo.png" alt="Logo Instituto"/>
                </div>

                <div className="coluna1">
                    <h3 className='titulo-secao'>Nossas Redes Sociais</h3>
                    <div className="redes-sociais">
                        <a href="https://www.instagram.com/institutonsfatima/" target="_blank" rel="noopener noreferrer">
                            <Instagram size={24} />
                        </a>
                        <a href="https://www.facebook.com/institutonsfatima" target="_blank" rel="noopener noreferrer">
                            <Facebook size={24} />
                        </a>
                        <a href="https://br.linkedin.com/company/institutonsfatima" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
