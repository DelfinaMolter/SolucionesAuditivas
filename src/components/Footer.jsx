import "./Footer.css";
import imgLogo from './../assets/img/logo.svg';
import ModalTemplate from "./Modal";
import { useState } from "react";
import Gracias from "./Gracias";

function Footer(){
    const [modalShow, setModalShow] = useState(false);

    return(
        <>
        <footer >
            <div className='container'>
                <div className='d-flex justify-content-between align-items-start align-items-md-center gap-5'>
                    <img src={imgLogo} alt="Logo" className='d-none d-md-block my-4'/>
                    <p className='d-none d-lg-block slogan'>Distribución y exportación de <span> dispositivos auditivos e implantables</span>.</p>
                    <div className='contact'>
                        <h5>
                            <a href='#contacto' onClick={() => setModalShow(true)}>Contacto</a>
                        </h5>
                        <p  className='my-2'>Building 9090 Unit 6, Panamá</p>
                        <p  className='my-2'>soluciones.auditivas@solucionesauditivas.com.pa</p>
                    </div>
                </div>
            </div>
        </footer>
        <ModalTemplate
          show={modalShow}
          onHide={() => setModalShow(false)}
        >
          <Gracias/>
        </ModalTemplate>
        </>
    )
}

export default Footer;