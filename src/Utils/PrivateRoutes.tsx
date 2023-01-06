import { Outlet, Navigate } from "react-router-dom";
import { useCurrentUser } from "./Firebase";

const PrivateRoutes: React.FC = () => {
    let user = useCurrentUser();

    return (
        user ? <Outlet/> : <Navigate to='/login'/>
    );
}

export default PrivateRoutes