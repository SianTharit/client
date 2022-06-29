import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";
import Footer from "./Footer";
import Header from "./header/Header";

function AuthLayoutUser() {
   const { closeDropdown } = useModal();
   return (
      <div
         className=" space-y-20"
         onClick={() => {
            closeDropdown();
         }}
      >
         <div>
            <Header />
            <Outlet />
         </div>
         <Footer />
      </div>
   );
}

export default AuthLayoutUser;
