import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { ShoppingCartIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Icon } from "../../common/Icon";
import { Input } from "../../form/Input";
import { useAuth } from "../../../contexts/AuthContext";
import Dropdown from "./Dropdown";

const titles = [
   {
      title: "MEN",
      to: "/products/men",
   },
   {
      title: "WOMEN",
      to: "/products/women",
   },
   {
      title: "KIDS",
      to: "/products/kids",
   },
   {
      title: "JORDAN",
      to: "/products/jordan",
   },
];

function NavList() {
   const { pathname } = useLocation();
   const [search, setSearch] = useState(false);
   const { user } = useAuth();
   console.log(pathname);

   const handleSearch = () => {
      setSearch((prev) => !prev);
   };

   const closeSearch = () => {
      setSearch(false);
   };
   return (
      <>
         {/*--------- MENU -------*/}
         <ul className="flex item-center gap-10">
            {titles.map((el) => (
               <NavItem
                  key={el.title}
                  title={el.title}
                  to={el.to}
                  active={pathname === el.to}
               />
            ))}
         </ul>

         {/*--------- ANOTHER  -------*/}
         <div className="flex pr-4 space-x-4 justify-end items-center flex-1">
            {!search ? (
               <Icon icon={<SearchIcon />} func={handleSearch} />
            ) : (
               <div className="flex justify-between">
                  <form className="flex bg-white-search border border-black rounded-3xl h-12 items-center p-4">
                     <Input
                        icon={<SearchIcon />}
                        placeholder="search"
                        color="white-search"
                        rounded="3xl"
                     />
                     <Icon icon={<XIcon />} func={closeSearch} />
                  </form>
               </div>
            )}
            <Link to="cart">
               <Icon icon={<ShoppingCartIcon />} />
            </Link>
            {!user ? (
               <Link to="/login">
                  <button className="border greenColor text-white border-none rounded-md h-10 text-sm font-bold w-20 shadow-md pop-up">
                     Sing In
                  </button>
               </Link>
            ) : (
               <>
                  <Dropdown />
               </>
            )}
         </div>
      </>
   );
}
export default NavList;
