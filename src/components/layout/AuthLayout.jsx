import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";

function AuthLayoutUser() {
   return (
      <div className=" space-y-20">
         <div>
            <Header />
            <Outlet />
         </div>
         <Footer />
      </div>
   );
}

export default AuthLayoutUser;
