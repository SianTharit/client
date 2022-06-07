import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

function AuthLayoutAdmin() {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default AuthLayoutAdmin;
