
// autoFocus

function Form() {
  return (
        <form>
            <h6 className="subtitle-producto">Contacto</h6>
            <h2 className="title-producto mb-5">Déjanos tu consulta</h2>
            <div className="box-input">
                <label htmlFor="name">Nombre*</label>
                <input type="text" id="name" name="name" placeholder="Escribí tu nombre completo." className="input"/>
            </div>
            <div className="box-input">
                <label htmlFor="email">Mail*</label>
                <input type="email" id="email" name ="email" placeholder="nombre@email.com" className="input"/>
            </div>
            <div className="box-input">
                <label htmlFor="address">Dirección</label>
                <input type="text" id="address" name="address" placeholder="Ingresá la dirección donde vivís." className="input"/>
            </div>
            <div className="box-input">
                <label htmlFor="phone">Teléfono*</label>
                <input type="text" id="phone" name="phone" placeholder="Ingresá tú número de teléfono." className="input"/>
            </div>
            <div className="box-input">
                <label htmlFor="msg">Mensaje*</label>
                <textarea type="text" id="msg" name="msg" placeholder="Escribinos tu mensaje." className="input text-area"></textarea>
            </div>
            <button className="btn btn-tertiary">Enviar</button>
        </form>
  );
}

export default Form;