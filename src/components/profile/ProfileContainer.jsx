import { useLocation } from "react-router-dom";
import Password from "./Password";
import Username from "./Username";
import Address from "./Address";
import Footer from "../layout/Footer";

function ProfileContainer() {
   const { pathname } = useLocation();
   return (
      <>
         {pathname === "/profile" && (
            <div className="flex flex-col max-w-7xl mt-10">
               <Username />
               <Password />
            </div>
         )}
         {pathname === "/profile/address" && (
            <div className="flex flex-col max-w-7xl mt-10">
               <Address />
            </div>
         )}
      </>
   );
}
export default ProfileContainer;
