import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

function Logo() {
   return (
      <Link
         to="/"
         className="flex items-center gap-3  text-3xl ml-4 font-extrabold tracking-tight"
      >
         <span>Nike</span> <img src={logo} alt="logo" />
      </Link>
   );
}

export default Logo;
