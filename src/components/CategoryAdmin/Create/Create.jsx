import React from 'react';
import {Form,Button} from 'react-bootstrap';

const CategoryAdminCreate = ({result})=>(
    <div className="categoryadmin-create">
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" placeholder="Titulo" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Slog</Form.Label>
                <Form.Control type="text" placeholder="Slog" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Conteúdo</Form.Label>
                <Form.Control type="text" placeholder="Conteúdo" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
)

export default CategoryAdminCreate;