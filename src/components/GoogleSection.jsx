
import useLanguage from "../utils/language.context";
import "./GoogleSection.css";

function GoogleSection(){
    const { t } = useLanguage();

    return(
        <div className='container  my-5'>
            <div className='google-section'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.1146442692425!2d-79.48927190667385!3d9.012816525497952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca98be5aa92d1%3A0x4b74d8a95214548f!2sBusiness%20Park%20Panama!5e0!3m2!1sen!2sar!4v1687315255287!5m2!1sen!2sar" title="googleAddress" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="google-footer">
                    <h3>{t('mapa.slogan')}</h3>
                    <button className="btn btn-primary">{t('mapa.contacto')}</button>
                </div>
            </div>
        </div>
        
    )
}

export default GoogleSection;