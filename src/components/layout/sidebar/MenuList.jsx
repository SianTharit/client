import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import {
   ClipboardListIcon,
   ShoppingBagIcon,
   UsersIcon,
   CogIcon,
   LogoutIcon,
} from "@heroicons/react/outline";
import MenuService from "./MenuService";

const menus = [
   {
      title: "Order",
      to: "/admin/order",
      icon: <ClipboardListIcon className="w-5 h-5" />,
   },
   {
      title: "Product",
      to: "/admin/product",
      icon: <ShoppingBagIcon className="w-5 h-5" />,
   },
   {
      title: "Customer",
      to: "/admin/customer",
      icon: <UsersIcon className="w-5 h-5" />,
   },
];

const services = [
   {
      title: "Setting",
      to: "",
      icon: <CogIcon className="w-5 h-5" />,
   },
   {
      title: "Logout",
      to: "",
      icon: <LogoutIcon className="w-5 h-5" />,
   },
];

function MenuList() {
   const { pathname } = useLocation();
   return (
      <div className="flex flex-col justify-between gap-15">
         <ul className="mt-10">
            {menus.map((el) => (
               <MenuItem
                  key={el.title}
                  title={el.title}
                  to={el.to}
                  icon={el.icon}
                  active={pathname === el.to}
               />
            ))}
         </ul>
         <ul>
            {services.map((el) => (
               <MenuService
                  key={el.title}
                  title={el.title}
                  to={el.to}
                  icon={el.icon}
                  active={pathname === el.to}
               />
            ))}
         </ul>
      </div>
   );
}

export default MenuList;
