import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
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
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end align-items-center flex-grow-1">
              <Nav className="mr-auto align-items-center">
                <Nav.Link href="#features">Nosotros</Nav.Link>
                <Nav.Link href="#pricing">Productos</Nav.Link>
                <Button>Contacto</Button>
              </Nav>
              <Nav className="flag">
                <img src={imgFlagPanama} alt="Panama Flag" className={activeFlag === 'PAN' && 'active'} onClick={()=>{handleFlag('PAN')}} />
                <img src={imgFlagUSA} alt="USA Flag" className={activeFlag === 'USA' && 'active'} onClick={()=>{handleFlag('USA')}} />
              </Nav>
            </Navbar.Collapse>
            {/* <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="top"
            >
              <Offcanvas.Header closeButton />
              <Offcanvas.Body>
                <Nav className="justify-content-end align-items-center flex-grow-1">
                  <Nav.Link href="#action1">Nosotros</Nav.Link>
                  <Nav.Link href="#action2">Productos</Nav.Link>
                  <Button>Contacto</Button>
                  <div className="flag">
                    <img src={imgFlagPanama} alt="Panama Flag" className={activeFlag === 'PAN' && 'active'} onClick={()=>{handleFlag('PAN')}} />
                    <img src={imgFlagUSA} alt="USA Flag" className={activeFlag === 'USA' && 'active'} onClick={()=>{handleFlag('USA')}} />
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas> */}
          </Container>
        </Navbar>

      {/* <a href="#7"><img src={imgLogo} alt="Logo" /></a> */}

      {/* <div className='d-none d-md-block'>
          <a href="#action1">Nosotros</a>
          <a href="#action2">Productos</a>
          <Button>Contacto</Button>
        <div className="flag">
          <img src={imgFlagPanama} alt="Panama Flag" className={activeFlag === 'PAN' && 'active'} onClick={()=>{handleFlag('PAN')}} />
          <img src={imgFlagUSA} alt="USA Flag" className={activeFlag === 'USA' && 'active'} onClick={()=>{handleFlag('USA')}} />
        </div>
      </div> */}

      {/* <div className="d-md-none navbar-top">
        <div className="toggle-menu">
          <input type="checkbox" id="burger-check" />
          <div className="burger-layer"></div>
          <div className="burger-layer"></div>
          <div className="burger-layer"></div>
          <div className="menu-top">
              <a href="#action1" className="menu-item">Nosotros</a>
              <a href="#action2" className="menu-item">Productos</a>
              <Button className="menu-item">Contacto</Button>
            <div className="flag">
              <img src={imgFlagPanama} alt="Panama Flag" className={`menu-item ${activeFlag === 'PAN' && 'active'}`} onClick={()=>{handleFlag('PAN')}} />
              <img src={imgFlagUSA} alt="USA Flag" className={`menu-item ${activeFlag === 'USA' && 'active'}`} onClick={()=>{handleFlag('USA')}} />
            </div>
          </div>
        </div>

      </div> */}
      </div>
    )
}

export default NavbarHeader;

