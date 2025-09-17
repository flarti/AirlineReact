import React from 'react';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Menu = ({ onSearchChange }) => {
  const [search, setSearch] = useLocalStorage('airlinesSearch', '');

  const handleChange = (e) => {
    const v = e.target.value;
    setSearch(v);
    onSearchChange?.(v);
  };

  return (
    <Navbar
      expand="lg"
      bg="white"
      className="py-2 shadow-sm border-bottom short-navbar"
      style={{ minHeight: '56px' }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-success" style={{ fontSize: '1.2rem', letterSpacing: '1px' }}>
          dev.Orest
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav" className="justify-content-between">
          <Nav className="me-3">
            <Nav.Link as={NavLink} end to="/" className="px-2">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/airlines" className="px-2">Airlines</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="px-2">About</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Пошук"
              className="me-2"
              aria-label="Search"
              style={{ minWidth: '200px' }}
              value={search}
              onChange={handleChange}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
