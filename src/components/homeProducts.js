import React from "react";
import Product from "./producto";
import { Row, Container } from 'react-bootstrap'

const HomeProducts = () => {
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=6`)
        .then(res => res.json())
        .then(res => setProducts(res.products))
        .catch(err => console.error(err));
    }, []);

    return (
        <Container>
       <Row md={3}>
            { products.map(product => <Product key={product.id} product={product} />) }
        </Row>
            </Container>
        
    );
}

export default HomeProducts;