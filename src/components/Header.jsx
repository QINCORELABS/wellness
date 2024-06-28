import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary p-3">
      <Container>
        <div style={{backgroundColor:"#49835E",width:"55px",height:"55px"}} className='rounded-circle text-center d-flex align-items-center justify-content-center'>
          <span className='text-light'>Demo</span>
        </div>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#book">BOOK</Nav.Link>
            <Nav.Link href="#contact">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header