import NavbarHeader from "./NavbarHeader";
import './Header.css';


function Header(){

    return(
        <header >
            <div className="header-email ">
                <div className="container py-2">
                    <p >soluciones.auditivas@solucionesauditivas.com.pa</p>
                </div>
            </div>
            <NavbarHeader/>

        </header>
    )
}

export default Header;