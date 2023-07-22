import useLanguage from "../utils/language.context";
import CarouselSection from "./CarouselSection";

function ProductSection(){
    const { t } = useLanguage();
    return(
        <div id="productos">
            <div className='container  py-5'>
                <h6 className="subtitle-producto">{t('productos.title')}</h6>
                <h2 className="title-producto mb-5">{t('productos.subtitle')}</h2>
                <CarouselSection/>
            </div>
        </div>
    )
}

export default ProductSection;