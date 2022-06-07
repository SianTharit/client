import { Link } from "react-router-dom";

function NavItem({ title, to, active }) {
   return (
      <li
         className={`flex items-center gap-2 text-md ${
            active ? "font-black underline underline-offset-4" : ""
         }`}
      >
         <Link to={to} className="flex justify-center gap-4">
            <span>{title}</span>
         </Link>
      </li>
   );
}

export default NavItem;
