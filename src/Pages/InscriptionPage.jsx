import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import UserService from "../Services/UserService";

const InscriptionPage = () => {
    const [user, setUser] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        // ...user copie colle les données déjà renseingées
        setUser({...user, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        if(user.password !== user.verifyPassword) {
            alert("Les mots de passe ne correspondent pas");
            return;
        }

        try {
            const response = await UserService.addUser(user);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }; 


    return <Container className="d-flex flex-column align-items-center">
        <h1>Inscription Page</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="required">Email address *</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required={true} value={user.email} onChange={handleChange}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="required">Name *</Form.Label>
                <Form.Control name="name" type="text" placeholder="Name" required={true} value={user.name} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password *</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required={true} value={user.password} onChange={handleChange}/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Verify Password *</Form.Label>
                <Form.Control name="verifyPassword" type="password" placeholder="Password" required={true} value={user.verifyPassword} onChange={handleChange}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
    </Container>;
}
 
export default InscriptionPage;