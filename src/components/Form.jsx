import "./Form.css";
import useLanguage from "../utils/language.context";
import { useDispatch, useStore } from "../Hooks/ContextForm";
import { useEffect, useState } from "react";
import ModalTemplate from "./Modal";
import Gracias from "./Gracias";
import useModal from "../Hooks/ContextModal";

function Form() {
    const { t } = useLanguage();
    const dispatch = useDispatch()
	const store = useStore()
	const [loading, setloading] =useState(false)
    const [modalShow, setModalShow] = useState(false);
    const {  setModal } = useModal();

	const onChange = (e) => {
		dispatch({
			type: 'contact',
			payload: {[e.target.name]: e.target.value}
		})
		dispatch({
			type:'error',
			payload: {[e.target.name]: false}
		})
	};
	const onBlur = (e) => {
		dispatch({
			type: 'contact',
			payload: {[e.target.name]: e.target.value}
		})
	}

    const validateForm = (store)=>{
        let success=0
        if(store.data.name.length < 2){
            success++
            dispatch({
                type:'error',
                payload: {'name': true}
            })
        }
        if(store.data.email.length < 7 ){
            success++
            dispatch({
                type:'error',
                payload: {'email': true}
            })
        }
        if(store.data.phone.length < 7 ){
            success++
            dispatch({
                type:'error',
                payload: {'phone': true}
            })
        }
        if(store.data.msg.length < 2){
            success++
            dispatch({
                type:'error',
                payload: {'msg': true}
            })
        }
        return success === 0
    
    }
    
	const submitForm = async (e) =>{
		e.preventDefault();
		if(validateForm(store)){
			setloading(true);
            setTimeout(()=>{
                setModalShow(true)
                // setModal(false)
            },1000 )
			// if(await ApiForm(store)){
			// 	setMsgError(false);
			// 	myModal.show()
			// 	dispatch({type:'reset'})
			// }else{
			// 	setMsgError(true)
			// 	myModal.show()
			// }
		}
	}
	useEffect(()=>{
		dispatch({type:'reset'})
		
	}, [])

    return (
        <>
            <form>
                <h6 className="subtitle-producto">{t('contacto')}</h6>
                <h2 className="title-producto mb-4">{t('form.title')}</h2>
                <div className="box-input">
                    <label htmlFor="name">{t('form.nombre')}*</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={store.data.name} 
                        placeholder="Escribí tu nombre completo." 
                        className={`input ${store.error.name ? 'error':''}`} 
                        onChange={onChange}
                        onBlur={onBlur}
                        autoFocus/>
                    <small className="error-msg ">{store.error.name? t('form.mensaje.error') : '' }</small>
                </div>
                <div className="box-input">
                    <label htmlFor="email">{t('form.mail')}*</label>
                    <input 
                        type="email" 
                        id="email" 
                        name ="email" 
                        value={store.data.email} 
                        placeholder="nombre@email.com" 
                        className={`input ${store.error.email ? 'error':''}`}
                        onChange={onChange}
                        onBlur={onBlur}/>
                    <small className="error-msg ">{store.error.email? t('form.mensaje.error') : '' }</small>
                </div>
                <div className="box-input">
                    <label htmlFor="address">{t('form.direccion')}</label>
                    <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        value={store.data.address} 
                        placeholder="Ingresá la dirección donde vivís." 
                        className='input'
                        onChange={onChange}
                        onBlur={onBlur}/>
                </div>
                <div className="box-input">
                    <label htmlFor="phone">{t('form.telefono')}*</label>
                    <input 
                        type="text" id="phone" 
                        name="phone" 
                        value={store.data.phone} 
                        placeholder="Ingresá tú número de teléfono." 
                        className={`input ${store.error.phone ? 'error':''}`}
                        onChange={onChange}
                        onBlur={onBlur}/>
                    <small className="error-msg ">{store.error.phone? t('form.mensaje.error') : '' }</small>
                </div>
                <div className="box-input">
                    <label htmlFor="msg">{t('form.mensaje')}*</label>
                    <textarea 
                        type="text" 
                        id="msg" 
                        name="msg" 
                        value={store.data.msg} 
                        placeholder="Escribinos tu mensaje." 
                        className={`input text-area ${store.error.msg ? 'error':''}`}
                        onChange={onChange}
                        onBlur={onBlur}></textarea>
                    <small className="error-msg ">{store.error.msg? t('form.mensaje.error') : '' }</small>
                </div>
                <button className="btn btn-tertiary" disabled={loading} onClick={(e)=>submitForm(e)} > {loading? t('form.sending') : t('form.submit')}</button>
            </form>
            <ModalTemplate
                show={modalShow}
                onHide={() => setModalShow(false)}
                >
                <Gracias/>
            </ModalTemplate>
        </>
    );
}

export default Form;