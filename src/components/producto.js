import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Product = (props) => {
  const navigate = useNavigate()
  return (
    <>
      {props?.product &&
        <Col md={4} className="d-flex justify-content-center mt-5">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.product.thumbnail} style={{ maxHeight: 150, objectFit: 'contain' }} />
            <Card.Body>
              <Card.Title>{props.product.id} - {props.product.title}</Card.Title>
              <Card.Text>
                {props.product.description}
              </Card.Text>
              <Button variant="primary" onClick={() => navigate(`/detalle/${props.product.id}`)}>Detalle</Button>
            </Card.Body>
          </Card>
        </Col>
      }</>
  );
}
Product.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  
}

export default Product;