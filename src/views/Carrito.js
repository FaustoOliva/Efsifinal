import { useContextState, ActionTypes } from "../Context";
import CardCarrito from "../components/CarritoCard";
import { Container, Row, Col } from "react-bootstrap";

const Carrito = () => {
    const {contextState, setContextState} = useContextState();
    return (
        <div>
            <Container>
                    <div>
                        <h1>Carrito</h1>
                        {contextState.producto.length === 0 ? (
                            <h2>No hay productos en el carrito</h2>
                        ) : (
                            <Row>
                                { contextState.producto.map(product => <CardCarrito key={product.id} product={product} />) }
                            </Row>
                        )}
                    </div>
            </Container>
        </div>
    );
}

export default Carrito;