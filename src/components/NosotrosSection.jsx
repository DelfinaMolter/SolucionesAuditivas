import Mission from "./Mission";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useLanguage from "../utils/language.context";

const sliderSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    lazyLoad: true,
    autoplaySpeed: 5000,
    autoplay: true,
    dots:true,
}

function NosotrosSection(){
    const { t } = useLanguage();

    return(
        <div id="nosotros">
            <div className='container my-5'>
                <div className="d-none d-md-flex justify-content-between my-5">
                    {t('missions').map((mission)=>
                        <Mission key={mission.title} data={mission}/>
                    )
                    }
                </div>
                <div className="d-md-none nosotros-mobile">
                    <Slider {...sliderSettings}>
                        {t('missions').map((mission, index)=> <Mission key={index} data={mission}/>)}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default NosotrosSection;