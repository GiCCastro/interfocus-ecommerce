// src/containers/CartSideBar/CartSideBar.jsx
import React from 'react';
import { useCart } from '../../context/CartContext';
import { Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartSideBar = ({ show, handleClose }) => {
    const { cartItems, total, removeItemFromCart } = useCart();

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrinho</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cartItems.length === 0 ? (
                    <p>Seu carrinho está vazio</p>
                ) : (
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {cartItems.map((item) => (
                            <li key={item.id} style={{ marginBottom: "1rem" }}>
                                <div>{item.name} - R${item.price.toFixed(2)}</div>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => removeItemFromCart(item.id)}
                                    style={{ marginTop: "0.5rem" }}
                                >
                                    Remover
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}
                <h5>Total: R$ {total.toFixed(2)}</h5>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '20rem'}}>
                <div className="text-center">
                    <Link to="/payment">
                        <button 
                            type="button" 
                            className="btn btn-lg btn-block sign-up-button" 
                            style={{ fontSize: '0.80rem',
                                width: '200px',
                                backgroundColor: '#34648D',
                                color: 'white',
                                fontWeight: 'bold',
                                borderRadius: '4px',
                            }} 
                        >
                            IR PARA O CARRINHO
                        </button>
                    </Link>
                </div>
                <div className="text-center" style={{marginTop: '1rem'}}>
                        <button 
                            type="button" 
                            className="btn btn-lg btn-block cart-button" 
                            style={{ fontSize: '0.80rem',
                                width: '200px',
                                backgroundColor: '#595959',
                                color: 'white',
                                fontWeight: 'bold',
                                borderRadius: '4px',}}

                                onClick={handleClose}>
                            CONTINUAR COMPRANDO
                        </button>
                </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CartSideBar;
