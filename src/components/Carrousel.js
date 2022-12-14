import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';


const Carrusel = (props) => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imagen}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h3>
          <p>Lo que Ud. necesita</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imagen}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h3>
          <p>Lo que Ud. necesita</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imagen}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h3>
          <p>Lo que Ud. necesita</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
Carrusel.propTypes = {
  imagen: PropTypes.string,
}

export default Carrusel;