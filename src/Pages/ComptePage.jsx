import { useEffect, useState } from "react";
import UserService from "../Services/UserService";

const ComptePage = () => {
    const [user, setUser] = useState({});
    const fetchUser = async () => {
        try {
            const response = await UserService.getUser();
            setUser(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return <>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.password}</h1>
        <h1>{user.id}</h1>
    </>;
}
 
export default ComptePage;