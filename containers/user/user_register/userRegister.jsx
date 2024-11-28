import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './userRegister.css';
import frame_register from '../../../assets/frame-login.png';
import { Link } from 'react-router-dom'; // Importando o Link
 
function UserRegister() {
    return (
        <Container className="mt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="container-register">
                <div style={{ flex: 1 }}>
                    <img 
                        src={frame_register} 
                        alt="Login Illustration"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className='content-register'>
                    <Row className="justify-content-center">
                        <h2 className='title-register'>Assine agora e navegue sem limites</h2>
                        <div className='text-center mb-3 subtitle-register'>
                            <span>Cadastre-se e tenha acesso a planos exclusivos, suporte técnico 24 horas e muito mais</span>
                        </div>
                        <Col md={12}> 
                            <Form>
                                <Form.Group className="mb-3 input-register" controlId="formBasicName">
                                    <Form.Label className='d-none'>Nome completo</Form.Label>
                                    <Form.Control type="name" placeholder="Nome Completo" />
                                </Form.Group>
                                
                                <Form.Group className="mb-3 input-register" controlId="formBasicEmail">
                                    <Form.Label className='d-none'>E-mail</Form.Label>
                                    <Form.Control type="email" placeholder="E-mail" />
                                </Form.Group>
 
                                <Form.Group className="mb-2 input-register" controlId="formBasicEmailConfirm">
                                    <Form.Label className='d-none'>Confirme o e-mail</Form.Label>
                                    <Form.Control type="email" placeholder="Confirme seu e-mail" />
                                    <span className="obs-email">
                                        Nunca compartilharemos seu e-mail com ninguém.
                                    </span>
                                </Form.Group>
 
                                <Form.Group className="mb-3 input-register" controlId="formBasicPassword">
                                    <Form.Label className='d-none'>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Senha" />
                                </Form.Group>
 
                                <Form.Group className="mb-3 input-register" controlId="formBasicPasswordConfirm">
                                    <Form.Label className='d-none'>Confirme sua senha</Form.Label>
                                    <Form.Control type="password" placeholder="Confirme sua senha" />
                                </Form.Group>
 
                                <Form.Group className="mb-3 square" controlId="formBasicCheckbox">
                                    <Form.Check style={{ color: '#000' }} type="checkbox" label="Check me out" />
                                </Form.Group>
                                
                                <div className="text-center container-buttons"> 
                                    <Button variant="primary" type="submit" className="button-register">
                                        CADASTRAR
                                    </Button>
 
                                    <Link to="/login" className="text-decoration-none" style={{ color: '#4f8ad6' }}>Já tenho uma conta</Link>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
            
            
        </Container>
    );
}
 
export default UserRegister;
 