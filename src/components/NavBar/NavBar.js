import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import SearchStudent from "../Filter/SearchStudent";
import AddStudent from "../StudentForm/AddStudent";

const NavBar = ({ addStudent, setFilterByName }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link>Students List</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

          <SearchStudent setFilterByName={setFilterByName} />

          <AddStudent addStudent={addStudent} />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
