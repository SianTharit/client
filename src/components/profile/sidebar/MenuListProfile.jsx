import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import MenuItemProfile from "./MenuItemProfile";

const menus = [
   {
      title: "my information",
      to: "/profile",
   },
   {
      title: "my address",
      to: "/profile/address",
   },
   {
      title: "my order",
      to: "/profile/order",
   },
   {
      title: "admin",
      to: "/profile/admin",
   },
];

function MenuListProfile() {
   const { user } = useAuth();
   // if (user.roll === "admin" && menus.length < 4) {
   //    menus.push({
   //       title: "admin",
   //       to: "/profile/admin",
   //    });
   // }
   // console.log(user.roll);
   const { pathname } = useLocation();
   return (
      <div className="flex flex-col justify-between gap-15">
         <ul className="mt-10">
            {menus.map((el) => {
               if (el.title === "admin") {
                  if (user.roll === "admin") {
                     return (
                        <MenuItemProfile
                           key={el.title}
                           title={el.title}
                           to={el.to}
                           active={pathname === el.to}
                        />
                     );
                  } else {
                     return <></>;
                  }
               } else {
                  return (
                     <MenuItemProfile
                        key={el.title}
                        title={el.title}
                        to={el.to}
                        active={pathname === el.to}
                     />
                  );
               }
            })}
         </ul>
      </div>
   );
}
export default MenuListProfile;
