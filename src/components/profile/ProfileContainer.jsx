import { useLocation } from "react-router-dom";
import Password from "./Password";
import Username from "./Username";
import Address from "./Address";
import AdminPage from "./admin/AdminPage";
import OrderPage from "./order/OrderPage";

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
         {pathname === "/profile/admin" && (
            <div className="flex flex-col max-w-7xl mt-10">
               <AdminPage />
            </div>
         )}
         {pathname === "/profile/order" && (
            <div className="flex flex-col max-w-7xl mt-10">
               <OrderPage />
            </div>
         )}
      </>
   );
}
export default ProfileContainer;
