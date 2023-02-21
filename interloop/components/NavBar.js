import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import loop from '../styles/images/loop.svg';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from 'react-bootstrap';

const NavBar = () => {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="mx-3" href="/">
          <img src={loop} alt="interloop photo" height={30} width={30} />
          Interloop
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: '100%' }}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Dashboard</Nav.Link>
              <NavDropdown title={session.user?.name}>
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => signOut()}>
                  Sign out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="mx-3" href="/">
        <img src={loop} alt="interloop photo" height={30} width={30} />
        Interloop
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: '100%' }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/login">Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
