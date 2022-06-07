import Logo from "./Logo";
import NavList from "./NavList";

function Header() {
   return (
      <div className="flex justify-between items-center w-screen bg-white shadow-lg h-[74px] sticky top-0 gap-4 z-10">
         <Logo />
         <NavList />
      </div>
   );
}

export default Header;
