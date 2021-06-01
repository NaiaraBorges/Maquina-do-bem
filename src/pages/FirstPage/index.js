import React from 'react';
import Card from '../../components/Card';
import './styles.css';

import bgImg from '../../assets/images/icon1.png';
import bgImg2 from '../../assets/images/icon2.png';
import bgImg3 from '../../assets/images/icon3.png';

const FirstPage = () => {
    return (
        <div className="container">
           <div className="first-container">
            <header>
                <span>Oportunidades em destaque</span>
                 <a>Geologalização Ativa</a> 
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider rounded" />
                </label>
            </header>
            </div>
            <div className='card-container-2'>
            <div className="card-service">
            <Card title ='VAGA DE VOLUNTARIADO'
            titulo = 'Arrecadação de alimentos para moradores de rua'
            src={bgImg}
            vehicles='SP Invisível'
            headline='2-6'
            body='Horas Semana'
            locale='Natal, RN'
            btn='Participar'
            />

            </div>

            <div className="card-list">
            <Card title ='Doação De Materiais'
            titulo = 'Arrecadação de alimentos para moradores de rua'
            src={bgImg2}
            vehicles='SP Invisível'
            headline='36'
            body='Ítens Disponíveis'
            locale='Natal, RN'
            btn='Doar'
            />

            </div>

            <div className="card-list">
            <Card title ='VAGA DE VOLUNTARIADO'
            titulo = 'Arrecadação de alimentos para moradores de rua'
            src={bgImg2}
            vehicles='SP Invisível'
            headline='36'
            body='Ítens Disponíveis'
            locale='Natal, RN'
            btn='Doar'
            />

            </div>

            <div className="card-list">
            <Card title ='VAGA DE VOLUNTARIADO'
            titulo = 'Arrecadação de alimentos para moradores de rua'
            src={bgImg2}
            vehicles='SP Invisível'
            headline='36'
            body='Ítens Disponíveis'
            locale='Natal, RN'
            btn='Doar'
            />

            </div>

            <div className="card-service">
            <Card title ='VAGA DE VOLUNTARIADO'
            titulo = 'Arrecadação de alimentos para moradores de rua'
            src={bgImg}
            vehicles='SP Invisível'
            headline='2-6'
            body='Horas Semana'
            locale='Natal, RN'
            btn='Participar'
            />

            </div>

            <div className="card-donate">
            <Card title ='Campanha de arrecadação'
            titulo = 'Arrecadação de alimentos para moradores de rua'
            src={bgImg3}
            vehicles='SP Invisível'
            headline='R$ 5.000'
            body='Valor esperado'
            locale='Natal, RN'
            btn='Contribuir'
            />

            </div>

            <div className="card-list">
            <Card title ='VAGA DE VOLUNTARIADO'
            titulo = 'Arrecadação de alimentos para moradores de rua'
            src={bgImg2}
            vehicles='SP Invisível'
            headline='36'
            body='Ítens Disponíveis'
            locale='Natal, RN'
            btn='Doar'
            />

            </div>

            <div className="card-service">
            <Card title ='VAGA DE VOLUNTARIADO'
            titulo = 'Arrecadação de alimentos para moradores de rua'
            src={bgImg}
            vehicles='SP Invisível'
            headline='2-6'
            body='Horas Semana'
            locale='Natal, RN'
            btn='Participar'
            />

            </div>

            <div className="card-list">
            <Card title ='VAGA DE VOLUNTARIADO'
            titulo = 'Arrecadação de alimentos para moradores de rua'
            src={bgImg2}
            vehicles='SP Invisível'
            headline='36'
            body='Ítens Disponíveis'
            locale='Natal, RN'
            btn='Doar'
            />

            </div>
            </div>
            <div className="buttom-secondary-large">
                <button>
                <p>Todas as Oportunidades</p>
                </button>
            </div>
        </div>
    );
};

export default FirstPage;