import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap'
import { ActionTypes, useContextState } from "../Context";

const DetalleProd = () => {
    const { contextState, setContextState } = useContextState()
    const { id } = useParams()
    const [product, setProduct] = useState({});
    React.useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => setProduct(res))
            .catch(err => console.error(err));
    }, []);

    const existe = contextState?.producto?.find(item => item.id === product.id)

    return (
        <Container>
            <h1>{product.title} ${product.price}</h1>
            <img src={product.thumbnail} alt=""></img>
            <p>{product.description}</p>
            <p>Rating: {product.rating}</p>
            {
                existe ?
                    <Button variant="danger" onClick={() =>
                        setContextState({
                            type: ActionTypes.SetEliminar,
                            value: product.id
                        })}>Eliminar del carrito</Button>
                    :
                    <Button variant="success" onClick={() =>
                        setContextState({
                            type: ActionTypes.SetProducto,
                            value: product
                        })}
                    >Agregar al carrito</Button>

            }
        </Container>
    )
}
export default DetalleProd;