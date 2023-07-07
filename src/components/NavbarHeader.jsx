import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imgLogo from './../assets/img/logoHeader.png';
import imgFlagPanama from './../assets/img/panama-flag.png';
import imgFlagUSA from './../assets/img/usa-flag.png';
import './NavbarHeader.css';

import useLanguage from '../utils/language.context';
import useModal from '../Hooks/ContextModal';

function NavbarHeader(){
  const { language, setLanguage, t } = useLanguage();
  const {  setModal } = useModal();

    return(
      <div className="container">
        <Navbar collapseOnSelect expand={'md'} className="bg-body-tertiary mb-3" variant='dark'>
          <Container fluid>
            <Navbar.Brand href="#slogan"><img src={imgLogo} alt="Logo Soluciones Auditivas" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end align-items-center   flex-grow-1">
              <Nav className="mr-auto align-items-start align-items-md-center">
                <Nav.Link href="#nosotros">{t('navigation.nosotros')}</Nav.Link>
                <Nav.Link href="#productos">{t('navigation.productos')}</Nav.Link>
                <button className="btn btn-secondary" onClick={() => setModal(true)}>{t('contacto')}</button>
              </Nav>
              <Nav className="flag align-items-center">
                <Nav.Link onClick={() => setLanguage('SPANISH')}><img src={imgFlagPanama} alt="Idioma Español" className={language === 'SPANISH' ? 'active' : ''} /></Nav.Link>
                <Nav.Link onClick={() => setLanguage('ENGLISH')}><img src={imgFlagUSA} alt="English language" className={language === 'ENGLISH' ? 'active' : ''}  /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
            
          </Container>
        </Navbar>

      </div>
    )
}

export default NavbarHeader;

