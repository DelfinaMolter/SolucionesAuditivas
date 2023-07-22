import { useEffect } from 'react';
import useLanguage from '../utils/language.context';
import './Gracias.css';
import useModal from '../Hooks/ContextModal';

function Gracias() {
    const { t } = useLanguage();
    const {  setModal } = useModal();

    useEffect(()=>{
		setModal(false)
	}, [])

    return (
        <div className="modal-gracias">
            <img src="/images/responsabilidad-icon.png" alt="" />
            <h2>¡{t('modal.gracias')}!</h2>
            <h4>{t('modal.gracias.descripcion')}</h4>
        </div>
    );
}

export default Gracias;