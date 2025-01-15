import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../Contexts/AuthContext";
import AuthService from "../Services/AuthService";

const NavBar = () => {
    const {isAuthenticated,setIsAuthenticated} = useContext(AuthContext);

    const handleLogout = () => {
      setIsAuthenticated(false);
      AuthService.logout();
    };
    
    return <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/">Cours</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
            {isAuthenticated == false ? <>
              <Nav.Link><Link to={"/connexion"}>Connexion</Link></Nav.Link>
              <Nav.Link><Link to={"/inscription"}>Inscription</Link></Nav.Link>
            </> : <>
              <Nav.Link><Link to={"/compte"}>Compte</Link></Nav.Link>
              <Button variant="primary" onClick={handleLogout}>Déconnexion</Button>
            </> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>;
}
 
export default NavBar;