/* eslint-disable @next/next/no-img-element */
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import loop from '../styles/images/logoInterloop.svg';
import { useSession, signIn, signOut } from 'next-auth/react';

const NavBar = () => {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return (
      <Navbar fluid expand="lg" className="bg-slate-700  ">
        <Navbar.Brand
          className="flex flex-row items-center justify-center lang-de"
          href="/"
          style={{ paddingLeft: "30px", paddingRight: "60px" }}
        >
          <img src={loop} alt="interloop photo" className="p-2 "height={200} width={200} />
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end text-white" style={{ paddingRight: "30px", width: '100%' }}>
              
              <Nav.Link
                className="text-slate-100 hover:text-blue-400 text-m font-bold"
                href="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
              
                className="text-slate-100 hover:text-blue-400 text-m font-bold"
                href="/dashboard"
              >
                Team 
              </Nav.Link>

              <Nav.Link
              
              className="text-slate-100 hover:text-blue-400 text-brand-text-m font-bold"
              href="/profile"
            >
              Profile  
            </Nav.Link>
            <Nav.Link onClick={() => signOut()}
              
              className="text-slate-100 hover:text-blue-400 text-m font-bold"
              
            >
              Sign Out  
            </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  return <></>;
};

export default NavBar;
