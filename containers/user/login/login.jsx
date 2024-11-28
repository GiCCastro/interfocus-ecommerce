import React from 'react';
import './login.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importando o Link
import frame_login from '../../../assets/frame-login.png';
import 'bootstrap/dist/css/bootstrap.min.css';
 
function Login() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className='container-login'>
                <div className='content-login'>
                    <h2 className="text-center title-login">Entre na sua conta</h2>
                    <div className='text-center mb-3 subtitle-login'>
                        <span>Acesse sua conta para aproveitar todos os benefícios do nosso serviço.</span>
                    </div>
                    <Form style={{ width: '100%' }}>
                        <Form.Group className="mb-3 input-login" controlId="formBasicEmail">
                            <Form.Label className='d-none'>E-mail</Form.Label>
                            <Form.Control
                               type="email"
                               placeholder="Insira seu e-mail"
                               required
                           />
                        </Form.Group>
 
                        <Form.Group className="mb-2 input-login" controlId="formBasicPassword">
                            <Form.Label className='d-none'>Senha</Form.Label>
                            <Form.Control
                               type="password"
                               placeholder="Insira sua senha"
                               required
                           />
                        </Form.Group>
                       
                        <div className="forgot-password mb-3">
                            <a href="#" className="text-decoration-none" style={{ color: '#000' }}>Esqueceu sua senha?</a>
                        </div>
 
                        <div className="text-center container-buttons">
                            <Button variant="primary" className="button-login" type="submit">
                                ENTRAR
                            </Button>
 
                            <Link to="/user-register" className="text-decoration-none" style={{ color: '#4f8ad6' }}>Não tenho uma conta</Link>
                        </div>
                    </Form>
                </div>
               
                <div style={{ flex: 1 }}>
                    <img
                       src={frame_login}
                       alt="Login Illustration"
                       style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                   />
                </div>
            </div>
        </div>
    );
}
 
export default Login;
 