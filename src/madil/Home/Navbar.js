import React from 'react'
import { Navbar, Container, Nav,NavDropdown,Form,FormControl ,Button} from 'react-bootstrap';

export default function navbar() {
  return (
    <div className='header-nav'>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Malawi Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="books">Books</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="signup">SignUp</Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
  )
}