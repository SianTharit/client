import { LogoutIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { Icon } from "../../common/Icon";
import ProfileIcon from "./ProfileIcon";

function Dropdown() {
   const [isOpen, setIsOpen] = useState(false);
   const { logout, user } = useAuth();

   return (
      <div className="relative inline-block text-left">
         <div className="flex justify-center items-center">
            <button
               className="flex justify-center w-full rounded-3xl border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-light-green-400 z-auto"
               onClick={() => setIsOpen((p) => !p)}
            >
               <div className="flex gap-2 items-center">
                  <ProfileIcon /> {user.username}
               </div>
            </button>
         </div>

         {isOpen ? (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
               <div className="py-1">
                  <Link
                     to="/profile"
                     className=" group flex items-center px-4 py-2 text-sm text-gray-700 hover:orgColor hover:text-white"
                  >
                     Your Profile
                  </Link>
                  <Link
                     to="/"
                     className=" group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white gap-2"
                     onClick={logout}
                  >
                     <Icon icon={<LogoutIcon />} />
                     Sign Out
                  </Link>
               </div>
            </div>
         ) : (
            ""
         )}
      </div>
   );
}
export default Dropdown;
