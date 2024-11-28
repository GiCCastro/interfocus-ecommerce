import React from 'react';
import { Link } from 'react-router-dom';

// Estilos //
import { checkIconStyle } from '../../../styles/globalStyles';

function SubscriptionStatus() {
    return (
        <div style={{
            backgroundImage: 'url(https://www.transparenttextures.com/patterns/crissxcross.png)',
        }}>
           

            <div className="container d-flex justify-content-center">
                <div className="card mb-4 box-shadow" 
                     style={{ 
                         borderColor: '#444444',
                         borderRadius: '1rem', 
                         transition: 'transform 0.3s ease', 
                         width: '40%', 
                         margin: '0 auto',
                         padding:  '2rem',
                         backgroundColor: 'transparent',
                         color: 'white',
                     }}>
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontWeight: 'bold', display: 'inline-block', borderBottom: '0.25rem solid #FFC300', paddingBottom: '0.5rem' }}>
                            Plano Atual
                        </h2>
                    </div>                   
                    <h3 className="text-center" style={{ fontWeight: 'bold', margin: '10px' }}>Classic</h3>
                    <div className="card-body text-center">
                        <h2 className="card-title pricing-card-title" style={{ fontWeight: '950' }}>
                            R$170.00 <small className="font-weight-light" style={{ fontSize: '1.2rem'}}>/ mês</small>
                        </h2>
                        <ul className="list-unstyled mt-3 mb-4" style={{ fontWeight: '400', fontSize: '1.1rem' }}>
                            <li>
                                <i className="bi bi-check" style={checkIconStyle}></i> 10 usuários inclusos
                            </li>
                            <li>
                                <i className="bi bi-check" style={checkIconStyle}></i> 2 GB de armazenamento
                            </li>
                            <li>
                                <i className="bi bi-check" style={checkIconStyle}></i> Suporte 24h
                            </li>
                        </ul>
                        <div className="mt-3">
                            <p className="lead mb-0" style={{ fontWeight: '950' }}>Válido até:</p>
                            <h4 style={{ fontWeight: '600' }}>02/10/2025</h4>
                        </div>

                        <div className="text-center" style={{display:'flex', justifyContent: 'center', marginTop: '3rem', gap: '1rem'}}>
                            <Link to="/change-plan">
                                <button 
                                    type="button" 
                                    className="btn btn-lg btn-block" 
                                    style={{color: '#FFC300', borderColor: '#FFC300', transition: 'all 0.3s ease' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#FFC300'; 
                                        e.currentTarget.style.color = 'black'; 
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent'; 
                                        e.currentTarget.style.color = '#FFC300'; 
                                        e.currentTarget.style.borderColor = '#FFC300'; 

                                    }}
                                >
                                    ALTERAR PLANO
                                </button>
                            </Link>
                            <Link to="/cancel-plan">
                            <button 
                                    type="button" 
                                    className="btn btn-lg btn-block" 
                                    style={{color: '#FFC300', borderColor: '#FFC300', transition: 'all 0.3s ease' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#FFC300'; 
                                        e.currentTarget.style.color = 'black'; 
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent'; 
                                        e.currentTarget.style.color = '#FFC300'; 
                                        e.currentTarget.style.borderColor = '#FFC300'; 

                                    }}
                                >
                                        CANCELAR PLANO                                                                                 
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionStatus;
