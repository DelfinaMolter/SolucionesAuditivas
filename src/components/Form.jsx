import "./Form.css";
import useLanguage from "../utils/language.context";
import { useDispatch, useStore } from "../Hooks/ContextForm";
import { useEffect, useRef, useState } from "react";
import { sendEmail } from "../utils/sendEmail";
import useGracias from "../Hooks/ContextGracias";
import ReCAPTCHA from "react-google-recaptcha";

function Form() {
    const { t } = useLanguage();
    const dispatch = useDispatch()
	const store = useStore()
	const [loading, setloading] =useState(false)
	const [recaptchaError, setRecaptchaError] =useState(null)
    const form = useRef();
    const captcha = useRef(null);
    const { setGracias } = useGracias();

	const onChangeInput = (e) => {
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
    function onChange() {
        if(captcha.current.getValue()){
            setRecaptchaError(false)
        }
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
    
	const submitForm = (e) =>{
		e.preventDefault();
		if(validateForm(store)){
            if(captcha.current.getValue()){
                console.log('El usuario no es un robot')
                setloading(true);
                sendEmail(form.current)
                setGracias(true)
            }else{
                setRecaptchaError(true)
            }
        }
	}

	useEffect(()=>{
		dispatch({type:'reset'})
		
	}, [])

    return (
        <form ref={form} onSubmit={submitForm}>
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
                    onChange={onChangeInput}
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
                    onChange={onChangeInput}
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
                    onChange={onChangeInput}
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
                    onChange={onChangeInput}
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
                    onChange={onChangeInput}
                    onBlur={onBlur}></textarea>
                <small className="error-msg ">{store.error.msg? t('form.mensaje.error') : '' }</small>
            </div>
            <ReCAPTCHA
                ref={captcha}
                sitekey="6Le9FEMnAAAAAIf6XrzjM1_ZEdy9EY-O_5Hh969f"
                onChange={onChange}
            />
            <small className="error-msg ">{recaptchaError? t('recaptchaError') : '' }</small>
            <button className="btn btn-tertiary" disabled={loading} type="submit"> {loading? t('form.sending') : t('form.submit')}</button>
        </form>
    );
}

export default Form;