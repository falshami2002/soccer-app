import { Outlet, Navigate } from "react-router-dom";
import { useCurrentUser } from "./Firebase";

const NoLoginRoutes: React.FC = () => {
    let user = useCurrentUser();

    return (
        !user ? <Outlet/> : <Navigate to='/'/>
    );
}

export default NoLoginRoutes