import "./Footer.css";
import imgLogo from './../assets/img/logotipo.png';
import useLanguage from "../utils/language.context";
import useModal from "../Hooks/ContextModal";

function Footer(){

    const { t } = useLanguage();
    const {  setModal } = useModal();

    return(

        <footer >
            <div className='container'>
                <div className='d-flex justify-content-between align-items-start align-items-md-center gap-5'>
                    <img src={imgLogo} alt="Logo Soluciones Auditivas" className='d-none d-md-block my-4'/>
                    <p className='d-none d-lg-block slogan'>{t('slogan')}<span>{t('slogan.bold')}</span>.</p>
                    <div className='contact'>
                        <h5>
                            <a href='#contacto'  onClick={() => setModal(true)}>{t('contacto')}</a>
                        </h5>
                        <p  className='my-2'>Building 9090 Unit 6, Panamá</p>
                        <p  className='my-2'>soluciones.auditivas@solucionesauditivas.com.pa</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;