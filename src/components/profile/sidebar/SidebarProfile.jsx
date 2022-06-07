import { UserIcon } from "@heroicons/react/outline";
import { Outlet } from "react-router-dom";
import { Icon } from "../../common/Icon";
import MenuListProfile from "./MenuListProfile";

function SidebarProfile() {
   return (
      <div className="grid grid-cols-9 gap-4 max-w-7xl">
         <div className=" flex bg-white overflow-auto col-span-2">
            <div className="h-screen overflow-auto">
               <div className="flex items-center gap-3 mt-4 text-2xl ml-5 font-extrabold tracking-tight">
                  <Icon icon={<UserIcon />} /> my-account
               </div>
               <MenuListProfile />
            </div>
         </div>
         <div className=" col-span-6 col-start-3">
            <Outlet />
         </div>
      </div>
   );
}

export default SidebarProfile;
