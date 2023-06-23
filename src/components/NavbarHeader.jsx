import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imgLogo from './../assets/img/logoDefaultHeader.png';
import imgFlagPanama from './../assets/img/panama-flag.png';
import imgFlagUSA from './../assets/img/usa-flag.png';
import './NavbarHeader.css';
import { useState } from 'react';

function NavbarHeader(){
  const [activeFlag, setActiveFlag] = useState('PAN')
  const handleFlag= (value)=>{
    setActiveFlag(value) 
  }

    return(
      <div className="container">
        <Navbar collapseOnSelect expand={'md'} className="bg-body-tertiary mb-3" variant='dark'>
          <Container fluid>
            <Navbar.Brand href="#"><img src={imgLogo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end align-items-center   flex-grow-1">
              <Nav className="mr-auto align-items-start align-items-md-center">
                <Nav.Link href="#features">Nosotros</Nav.Link>
                <Nav.Link href="#pricing">Productos</Nav.Link>
                <Button>Contacto</Button>
              </Nav>
              <Nav className="flag align-items-center">
                <Nav.Link href="#features"><img src={imgFlagPanama} alt="Panama Flag" className={activeFlag === 'PAN' && 'active'} onClick={()=>{handleFlag('PAN')}} /></Nav.Link>
                <Nav.Link href="#features"><img src={imgFlagUSA} alt="USA Flag" className={activeFlag === 'USA' && 'active'} onClick={()=>{handleFlag('USA')}} /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
            
          </Container>
        </Navbar>
      </div>
    )
}

export default NavbarHeader;

