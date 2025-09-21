import '../styles/Oportunidade.scss'
import { Link } from "react-router-dom";
import React from 'react';


function Oportunidade() {
    return (
        <div className="container22">
            <div className='bloco'>
                <h3 className='title2'>Não Perca esta oportunidade</h3>
                <p className='p2'>Cadastre-se agora e garante sua participação na maior <br />
                    feira de profissões da região. É gratuito e você receberá <br /> seu QR Code de acesso.</p>
            </div>
            <div className="botoes-hero">
                <Link to="/sobre" className="botao">Saber mais</Link>
            <div className='botoes-hero2'>
                <Link to="/cadastro" className="botao">Cadastrar-se</Link>
            </div>
            </div>
        </div>

    )
}

export default Oportunidade;