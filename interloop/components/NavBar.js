/* eslint-disable @next/next/no-img-element */
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import loop from '../styles/images/interloop-1.svg';
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
            <Nav className="justify-content-end " style={{ width: '100%' }}>
              <Nav.Link
                className="text-blue-200 hover:text-white text-m font-bold"
                href="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
              
                className="hover:text-white text-blue-200 text-m font-bold"
                href="/dashboard"
              >
                Dashboard
              </Nav.Link>


              <NavDropdown 
                align="end"
                className="text-m font-bold"
                title={
                  <span className=" text-blue-200 hover:text-white ">

                    {session.user?.name}
                    
                  </span>
                }
              >
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

  return <></>;
};

export default NavBar;
