import React, { useState } from 'react'; 
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/interfocus_logo.png';
import { RxAvatar } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { BiSupport   } from "react-icons/bi";
import CartSideBar from '../containers/CartSideBar/CartSideBar';

const LoggedHeader = () => {
  const [logado, setLogado] = useState(true);
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);  

  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Interfocus Logo"
              width="150"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Página inicial</Nav.Link>
            <Nav.Link as={Link} to="/packages">Pacotes</Nav.Link>
            <Nav.Link as={Link} to="/manage_packages">Gerenciar Planos</Nav.Link>   
          </Nav>
          {logado ? (
            <Nav>
              <NavDropdown
                title={<RxAvatar style={{ fontSize: '2rem' }} />}
                id="navbarDropdownMenuLink"
                align="end"
              >
                <div className='text-center'>
                  <Nav.Link as={Link} to="/status">Meu plano</Nav.Link>
                  <Nav.Link as={Link} to="/subscription-update">Alterar plano</Nav.Link>
                  <NavDropdown.Item onClick={() => setLogado(false)}>
                    Sair
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link onClick={handleShowCart} style={{ cursor: 'pointer' }}>
              <FaShoppingCart style={{ fontSize: '1.5rem' }} /> 
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/user-register">Criar conta</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>            
              </Nav>

          )}
          <Nav>
            <Nav.Link as={Link} to="/contact"><BiSupport style={{ fontSize: '3.7rem', padding: '1rem' }} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  
      <CartSideBar show={showCart} handleClose={handleCloseCart} />
    </header>
  );
};

export default LoggedHeader;
