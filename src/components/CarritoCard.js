import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import { ActionTypes, useContextState } from "../Context"
import PropTypes from 'prop-types';

const CardCarrito = (props) => {
  const { contextState, setContextState } = useContextState()
  const navigate = useNavigate()
  return (
    <Col md={4} className="d-flex justify-content-center mt-5">
        <Card className='card borde' style={{ width: '18rem' }}>
          <Card.Img variant="top" className='imagen' src={props.product.thumbnail} />
          <Card.Body>
            <Card.Title>{props.product.title}</Card.Title>
            <Card.Text>
              {props.product.description}
            </Card.Text>
            <Button variant="danger" onClick={() =>
              setContextState(
                {
                  type: ActionTypes.SetEliminar,
                  value: props.product.id
                })}
            >Eliminar del carrito</Button>
          </Card.Body>
        </Card>
    </Col>
  );
}
CardCarrito.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  
}
export default CardCarrito;