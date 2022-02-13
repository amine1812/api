import React from 'react';
import {Navbar,Container} from 'react-bootstrap'
function NavBar() {
  return <div>
      <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    </Container>
  </Navbar>
  </div>;
}

export default NavBar;
