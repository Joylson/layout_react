import React from 'react';
import './Card.css';

const Card = (props) => {
    return (<div style={{display : 'flex', justifyContent : 'center'}}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className="card-mod">
                <img className="card-img" src={props.img} alt="img" />
                <div className="card-text">
                    <p style={{ fontWeight: 'bold' }}>{props.name}</p>
                    <p>{props.email}</p>
                </div>
            </div>
        </a>
    </div>

    );
};

export default Card;


