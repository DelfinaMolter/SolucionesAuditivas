
// autoFocus

import useLanguage from "../utils/language.context";

function Form() {
    const { t } = useLanguage();

  return (
        <form>
            <h6 className="subtitle-producto">{t('contacto')}</h6>
            <h2 className="title-producto mb-5">{t('form.title')}</h2>
            <div className="box-input">
                <label htmlFor="name">{t('form.nombre')}*</label>
                <input type="text" id="name" name="name" placeholder="Escribí tu nombre completo." className="input"/>
            </div>
            <div className="box-input">
                <label htmlFor="email">{t('form.mail')}*</label>
                <input type="email" id="email" name ="email" placeholder="nombre@email.com" className="input"/>
            </div>
            <div className="box-input">
                <label htmlFor="address">{t('form.direccion')}</label>
                <input type="text" id="address" name="address" placeholder="Ingresá la dirección donde vivís." className="input"/>
            </div>
            <div className="box-input">
                <label htmlFor="phone">{t('form.telefono')}*</label>
                <input type="text" id="phone" name="phone" placeholder="Ingresá tú número de teléfono." className="input"/>
            </div>
            <div className="box-input">
                <label htmlFor="msg">{t('form.mensaje')}*</label>
                <textarea type="text" id="msg" name="msg" placeholder="Escribinos tu mensaje." className="input text-area"></textarea>
            </div>
            <button className="btn btn-tertiary">{t('form.submit')}</button>
        </form>
  );
}

export default Form;