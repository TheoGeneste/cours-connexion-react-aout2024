import { useContext } from "react";
import { Outlet } from "react-router";
import ConnexionPage from "../Pages/ConnexionPage";
import AuthContext from "../Contexts/AuthContext";

const RouteSecu = () => {
    const {isAuthenticated} = useContext(AuthContext);

    return isAuthenticated ? <Outlet /> : <ConnexionPage  />
;
}
 
export default RouteSecu;