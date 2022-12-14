import React from "react";
import Product from "../components/producto";
import { Row, Container } from 'react-bootstrap'


const Products = () => {
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        fetch(`https://dummyjson.com/products`)
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

export default Products;