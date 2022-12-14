import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default function Contacto() {
    return (
        <Container>
            <Form >
                <p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" name="nombre" maxLength={20} required />
                    </Form.Group>
                </p>
                <p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control type="text" placeholder="Apellido" name="apellido" maxLength={15} required />
                    </Form.Group>
                </p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" class="u-full-width" placeholder="example@gmail.com" minLength={11} maxLength={30} required />
                </Form.Group>
                <p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Edad:</Form.Label>
                        <Form.Control type="number" name="edad" class="u-full-width" maxLength={2} required />
                    </Form.Group>
                </p>
                <p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telefono:</Form.Label>
                        <Form.Control type="number" name="telefono" class="u-full-width" minLength={8} required />
                    </Form.Group>
                </p>
                <Button variant="primary" type="submit" >
                    Agregar contacto
                </Button>
            </Form>
        </Container>
    );
}
