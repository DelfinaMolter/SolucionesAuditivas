import Carousel from 'react-bootstrap/Carousel';
import imgProduct1 from './../assets/img/product1.png';
import imgProduct2 from './../assets/img/product2.png';
import imgProduct3 from './../assets/img/product3.png';

function CarouselSection() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={imgProduct1}
          alt="Foto"
        />
        {/* <Carousel.Caption>
          <h3>Implantes Nucleus</h3>
          <p>Contamos con un abanico de implantes y electrodos para distintos tipos de hipoacusia y anatomía coclear.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={imgProduct2}
          alt="Foto"
        />
        {/* <Carousel.Caption>
          <h3>Procesador de sonido Baha - 6 Max</h3>
          <p>Dispositivo de alta potencia que ofrece un excelente rendimiento auditivo a partir de un diseño pequeño y discreto.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgProduct3}
          alt="Foto"
        />
        {/* <Carousel.Caption>
          <h3>Implantes Nucleus</h3>
          <p>
          Contamos con un abanico de implantes y electrodos para distintos tipos de hipoacusia y anatomía coclear.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;