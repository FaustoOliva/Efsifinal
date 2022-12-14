import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const Marcas = (props) => {
    return (
        <>
            <Container className="container-marcas">
                <h3>Marcas con las que trabajamos</h3>
                <Row>
                    <Col md={4}><img src={props.marca1} alt=""></img></Col>
                    <Col md={4}><img src={props.marca2} alt=""></img></Col>
                    <Col md={3}><img src={props.marca3} alt=""></img></Col>
                    <Col md={1}><img src={props.marca4} alt=""></img></Col>
                </Row>
            </Container>
        </>
    );
}
Marcas.propTypes = {
    marca1: PropTypes.string,
    marca2: PropTypes.string,
    marca3: PropTypes.string,
    marca4: PropTypes.string,
}
export default Marcas;