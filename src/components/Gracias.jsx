import useLanguage from '../utils/language.context';
import './Gracias.css';

function Gracias() {
    const { t } = useLanguage();
    return (
        <div className="modal-gracias">
            <img src="/images/responsabilidad-icon.png" alt="" />
            <h2>¡{t('modal.gracias')}!</h2>
            <h4>{t('modal.gracias.descripcion')}</h4>
        </div>
    );
}

export default Gracias;