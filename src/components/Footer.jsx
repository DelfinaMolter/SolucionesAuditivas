import { Button } from 'react-bootstrap';
import imgLogo from './../assets/img/LogoDefault.png';

function Footer(){
    return(
        <footer>
            <img src={imgLogo} alt="Logo" />
            <p>Distribución y exportación de dispositivos auditivos e implantables.</p>
            <div>
                <Button>Contacto</Button>
                <p>Building 9090 Unit 6, Panamá</p>
                <p>soluciones.auditivas@solucionesauditivas.com.pa</p>
            </div>
        </footer>
    )
}

export default Footer;