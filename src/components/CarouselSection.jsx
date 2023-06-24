// import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from './CarouselItem';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const products = [
  {
      imgDesktop:'/images/product1.png',
      imgMobile:'/images/product1-mobile.png',
      title:'Implantes Nucleus',
      description:'Contamos con un abanico de implantes y electrodos para distintos tipos de hipoacusia y anatomía coclear.'
  },
  {
    imgDesktop:'/images/product2.png',
    imgMobile:'/images/product2-mobile.png',
    title:'Implantes Nucleus',
    description:'Contamos con un abanico de implantes y electrodos para distintos tipos de hipoacusia y anatomía coclear.'
  },
  {
    imgDesktop:'/images/product3.png',
    imgMobile:'/images/product3-mobile.png',
    title:'Implantes Nucleus',
    description:'Contamos con un abanico de implantes y electrodos para distintos tipos de hipoacusia y anatomía coclear.'
  }
]

const sliderSettings = {
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  lazyLoad: true,
  autoplaySpeed: 5000,
  autoplay: true,
  centerMode:false,
  dots:true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
      }
    }
  ]
}

function CarouselSection() {
  return (
    <div>
      <Slider {...sliderSettings}>
        {products.map((product, index)=> <CarouselItem key={index} data={product}/>)}
      </Slider>
    </div>


    
  );
}

export default CarouselSection;