import MenuList from "./MenuList";
import logo from "../../../assets/images/logo.png";

function Sidebar() {
   return (
      <div className="w-60 flex bg-light-sidebar overflow-auto">
         <div className="ml-3 h-screen overflow-auto pb-10 ">
            <div className="flex items-center gap-3 mt-4 text-3xl ml-5 font-extrabold tracking-tight">
               <span>Nike</span> <img src={logo} alt="logo" />
            </div>
            <MenuList />
         </div>
      </div>
   );
}

export default Sidebar;
