import "./NosotrosSection.css";
import Mission from "./Mission";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const missions = [
    {
        img:'/images/vanguardia-icon.png',
        title:'Vanguardia',
        description:'Brindamos opciones de vanguardia que ayuden a las personas a recuperar su audición y participar plenamente en la sociedad.'
    },
    {
        img:'/images/responsabilidad-icon.png',
        title:'Responsabilidad',
        description:'Creemos en la importancia de construir relaciones sólidas basadas en la confianza y el respeto mutuo.'
    },
    {
        img:'/images/innovacion-icon.png',
        title:'Innovación',
        description:'Adaptamos a los avances tecnológicos para proporcionar las mejores opciones a nuestros clientes.'
    }
]
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
    return(
        <div id="nosotros">
            <div className='container my-5'>
                <div className="d-none d-md-flex justify-content-between my-5">
                    {missions.map((mission)=>
                        <Mission key={mission.title} data={mission}/>
                    )
                    }
                </div>
                <div className="d-md-none nosotros-mobile">
                    <Slider {...sliderSettings}>
                        {missions.map((mission, index)=> <Mission key={index} data={mission}/>)}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default NosotrosSection;