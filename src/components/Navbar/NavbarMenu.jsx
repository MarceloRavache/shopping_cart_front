import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

const NavbarMenu = ()=>(
    <div className="navabar-content">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/list-pages">Listar Paginas</Nav.Link>
            <Nav.Link href="/list-category">Listar Categorias</Nav.Link>
            <Nav.Link href="/list-products">Listar Produtos</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    </div>
)

export default NavbarMenu;