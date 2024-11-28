
export const planos = [
    { nome: 'Básico', preco: 125, lines: ['5 dispositivos', '1 GB'], bgColor: 'transparent', description: 'Para conhecer' }, 
    { nome: 'Classic', preco: 170, lines: ['10 dispositivos', '10 GB', 'Suporte 24h'], bgColor: 'transparent', description: 'Para escritório' }, 
    { nome: 'Premium', preco: 300, lines: ['30 dispositivos', '100 GB', 'Suporte 24h', 'Suporte prioritário'], bgColor: 'transparent', description: 'Ideal para empresas' }, 
    { nome: 'Deluxe', preco: 350, lines: ['100 dispositivos', '1 TB', 'Suporte 24h', 'Suporte prioritário'], bgColor: 'transparent', description: 'Para grandes empresas' }
];

import React, {useState} from 'react';
import PlanCard from '../../components/pricing/PlanCard';
import CartSideBar from '../CartSideBar/CartSideBar';
import { useCart } from '../../context/CartContext';

function Packages() {
    const [showCart, setShowCart] = useState(false);
    
  

    return (
        <div
            style={{
                backgroundImage: 'url(https://www.transparenttextures.com/patterns/crissxcross.png)',
            }}
        >
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Planos</h1>
                <p className="lead">Explore nossos planos exclusivos e escolha o ideal para você!</p>
                <button onClick={() => setShowCart(true)} className="btn btn-primary">
                    Ver Carrinho
                </button>
            </div>

            <div className="container">
                <div className="row">
                    {planos.map((plano, index) => (
                        <PlanCard
                            key={index}
                            plano={plano.nome}
                            preco={plano.preco}
                            lines={plano.lines}
                            bgColor={plano.bgColor} 
                            description={plano.description} 
                        />
                    ))}
                </div>
            </div>
            <CartSideBar show={showCart} handleClose={() => setShowCart(false)} />
        </div>
    );
}

export default Packages;
