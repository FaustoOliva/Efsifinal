import logo from '../../images/Logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const LayoutNavbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="logo"  style={{width:"60px", height:"70px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Productos</Link>
            <Link to="/carrito-de-compras" className="nav-link">Carrito de compras</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
            <Link to="/quienes-somos" className="nav-link">Quienes somos</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default LayoutNavbar;
