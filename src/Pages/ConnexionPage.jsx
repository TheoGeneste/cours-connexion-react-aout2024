import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import UserService from "../Services/UserService";
import axios from "axios";
import AuthContext from "../Contexts/AuthContext";

const ConnexionPage = () => {
    const [user, setUser] = useState({});
    const {setIsAuthenticated} = useContext(AuthContext);

    const handleChange = (e) => { 
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await UserService.login(user);
            // Précise le token pour toutes les requêtes axios
            axios.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;
            localStorage.setItem('token', response.data.token);
            setIsAuthenticated(true);
            // Navigate('/compte');
        } catch (error) {
            console.error(error);
        }
    };

    return <Container className="d-flex flex-column align-items-center">
        <h1>Connexion Page</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="required">Email address *</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required={true} value={user.email} onChange={handleChange} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password *</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required={true} value={user.password} onChange={handleChange} />
            </Form.Group>



            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>;
}

export default ConnexionPage;