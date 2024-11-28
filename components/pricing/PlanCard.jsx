import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

import { checkIconStyle } from '../../styles/globalStyles';

function PlanCard({ plano, preco, lines, description }) {
    const { addItemToCart } = useCart;
    
    const addToCart = () => {
        addItemToCart({ id: plano, name: plano, price: preco });
    };

    const cardStyle = {
        backgroundColor: 'transparent',
        border: '3px solid #444',
        color: 'white',
        fontWeight: 'bold',
        minHeight: '25rem',
        height: '27rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        padding: '1rem',
        borderRadius: '8px',
    };

    const buttonStyle = {
        fontSize: '0.90rem',
        backgroundColor: '#FFC300',
        color: 'black',
        fontWeight: 'bold',
        visibility: 'hidden',
        opacity: 0,
        transition: 'visibility 0s, opacity 0.3s ease',
        borderRadius: '4px',
    };

    const hoverEffect = (e, enter) => {
        const signUpButton = e.currentTarget.querySelector('.sign-up-button');
        const cartButton = e.currentTarget.querySelector('.cart-button');

        e.currentTarget.style.borderColor = enter ? '#ffc300' : '#444';
        e.currentTarget.style.transform = enter ? 'scale(1.05)' : 'scale(1)';

        [signUpButton, cartButton].forEach(button => {
            button.style.visibility = enter ? 'visible' : 'hidden';
            button.style.opacity = enter ? '1' : '0';
        });
    };

    return (
        <div className="col-md-3">
            <div 
                className="card mb-4 box-shadow card-plan" 
                style={cardStyle}
                onMouseEnter={(e) => hoverEffect(e, true)}
                onMouseLeave={(e) => hoverEffect(e, false)}
            >
                <div className="text-center" style={{ margin: '1rem 0' }}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{plano}</h4>
                    <h2 className="pricing-card-title" style={{ fontWeight: '950', margin: '1.5rem 0' }}>
                        R${preco.toFixed(2)}
                        <small style={{ fontSize: '0.8rem', color: 'white' }}>/ mês</small>
                    </h2>
                </div>

                <p style={{ marginBottom: '1rem', fontSize: '1rem' }}>{description}</p>

    
                <ul className="list-unstyled" style={{ paddingLeft: 0, marginBottom: 'auto' }}>
                    {lines.map((line, index) => (
                        <li key={index} style={{ marginBottom: '0.5rem' }}>
                            <i className="bi bi-check" style={checkIconStyle}></i> {line}
                        </li>
                    ))}
                </ul>

                {/* Botões */}
                <div style={{ display: 'flex', justifyContent: 'center', }}>
                <div className="text-center">
                    <Link to="/payment" state={{ package: plano, price: preco }} style={{ textDecoration: 'none' }}>
                        <button 
                            type="button" 
                            className="btn btn-lg btn-block sign-up-button" 
                            style={buttonStyle}
                        >
                            ASSINE AGORA
                        </button>
                    </Link>
                </div>
                <div className="text-center" style={{marginLeft: '1rem'}}>
                    <Link to="/payment" state={{ package: plano, price: preco }} style={{ textDecoration: 'none' }}>
                        <button 
                            type="button" 
                            className="btn btn-lg btn-block cart-button" 
                            style={buttonStyle}
                        >
                        <FaShoppingCart style={{fontSize: '1.25rem'}}/>
                        </button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
}

export default PlanCard;
