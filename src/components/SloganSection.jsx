import "./SloganSection.css";
import imgBgSlogan from './../assets/img/bg-slogan.png';
import imgBgSloganMobile from './../assets/img/bg-slogan-mobile.png';
import useLanguage from "../utils/language.context";

function SloganSection(){
    const { t } = useLanguage();

    return(
        <div className="slogan py-3 py-md-5" id="slogan">
            <div className='container'>
                <div className='box-slogan'>
                    <picture>
                        <source media="(max-width: 600px)" srcSet={imgBgSloganMobile}/>
                        <img src={imgBgSlogan} alt="" />
                    </picture>
                    <h1>{t('slogan')}<span>{t('slogan.bold')}</span>.</h1>
                </div>
            </div>
        </div>
    )
}

export default SloganSection;