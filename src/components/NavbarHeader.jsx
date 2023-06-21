import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import imgLogo from './../assets/img/LogoDefault.png';
import './NavbarHeader.css';

function NavbarHeader(){

    return(
      <>
        <Navbar expand={'md'} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img src={imgLogo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton />
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Nosotros</Nav.Link>
                  <Nav.Link href="#action2">Productos</Nav.Link>
                  <Button>Contacto</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    )
}

export default NavbarHeader;

