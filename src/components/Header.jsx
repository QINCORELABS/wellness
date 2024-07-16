import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import logo from "../assets/logo.png"
// import logo1 from "../assets/logo1.png"
import logonw from "../assets/logonw.png"
function Header() {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary p-1">
      <Container>
        {/* <div  className='ms-5 text-center d-flex align-items-center justify-content-center'>
         <div className='logo-part1'> <img width={"75px"} height={"65px"} className='logo' src={logo} alt="" /></div>
          <div className='p-1'><img height={"106px"} src={logo1} alt="" /></div>
        </div> */}
        <div className='mt-2'><img width={"150px"} src={logonw} alt="" /></div>
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