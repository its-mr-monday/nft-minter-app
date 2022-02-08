/*
    Copyright 2022 by Zackary Morvan, Cyber M Technologies.
    All rights reserved
    This file is part of the NFT MINTER APP, and is released 
    under the "MIT License Agreement". Please see the LICENSE file that 
    should have been included as part of this package
*/
import { NavDropdown, Navbar, Nav, Container } from 'react-bootstrap';

const Navbar = props => {
    let authed = props.authed;
    if (authed === true) {
        //let token = props.token;
        let username = props.username;

        return (
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="/">NFT Minter App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#/dashboard">Dashboard</Nav.Link>
                    <NavDropdown title="Minting Menu" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Upload NFT Image</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">View NFT Images</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Mint a NFT Image</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
    
                  </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="/logout">Logout of {username}</Nav.Link>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )
    } else {
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">NFT Minter App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
                  <Nav.Link href="/login">Login</Nav.Link>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    }
}

export default Navbar;