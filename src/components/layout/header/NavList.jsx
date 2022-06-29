import { useLocation, useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import { ShoppingCartIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Icon } from "../../common/Icon";
import { Input } from "../../form/Input";
import { useAuth } from "../../../contexts/AuthContext";
import Dropdown from "./Dropdown";
import { useCart } from "../../../contexts/CartContext";
import { useProduct } from "../../../contexts/ProductContext";

const titles = [
   {
      title: "All Products",
      to: "/allProducts",
   },
];

function NavList() {
   const { pathname } = useLocation();
   const [search, setSearch] = useState(false);
   const { user } = useAuth();
   const { amount } = useCart();
   const { searchTerm, setSearchTerm } = useProduct();
   const navigate = useNavigate();
   // console.log(pathname);

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
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        navigate={() => navigate("/allProducts")}
                     />
                     <Icon icon={<XIcon />} func={closeSearch} />
                  </form>
               </div>
            )}
            <Link to="/cart">
               <Icon icon={<ShoppingCartIcon />} />
            </Link>
            <Link
               to="/cart"
               className="absolute rounded-full colorGreen right-[124px] top-3 text-white w-6 h-6 text-center shadow-xl"
            >
               {amount ? `${amount}` : "0"}
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
