import CarouselSection from "./CarouselSection";
import "./ProductSection.css";

function ProductSection(){
    return(
        <div id="productos">
            <div className='container  py-5'>
                <h6 className="subtitle-producto">Qué Ofrecemos</h6>
                <h2 className="title-producto mb-5">Soluciones auditivas de calidad</h2>
                <CarouselSection/>
            </div>
        </div>
    )
}

export default ProductSection;