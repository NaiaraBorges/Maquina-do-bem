import React from 'react';


import './style.css';

function Card ({title, titulo, src, alt, body, headline, locale, vehicles, btn}) {
    return (
        <div className='card-container'>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
            </div>
        <div className="button-background">
        </div>

            <div className="card-titulo">
                <h1>{titulo}</h1>
                 <div className="vehicles">
                <h2>{vehicles}</h2>
                </div>
            </div>
            <div className='icon-service'>
                <img src={src} alt={alt} />
            </div>
            <div className="info-service">
                <p>{headline}</p>
                <h4>{body}</h4>
            </div>
            <div className="btn">
                <button>
                    <a>{btn}</a>
                </button>
            </div>
            <div className="button-background-2">

            </div>
            <div className="locale">
                <p>{locale}</p>
            </div>
            </div>
        </div>
    )

}

export default Card;