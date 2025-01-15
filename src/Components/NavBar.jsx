import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/">Cours</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
            <Nav.Link><Link to={"/connexion"}>Connexion</Link></Nav.Link>
            <Nav.Link><Link to={"/inscription"}>Inscription</Link></Nav.Link>
            <Nav.Link><Link to={"/compte"}>Compte</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>;
}
 
export default NavBar;