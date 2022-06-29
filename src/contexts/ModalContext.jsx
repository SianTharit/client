import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalContextProvider({ children }) {
   const [showModal, setShowModal] = useState(false);
   const [showDropdown, setShowDropdown] = useState(false);
   const [showEditProduct, setShowEditProduct] = useState(false);
   const [showLoading, setShowLoading] = useState(false);

   const openModal = () => {
      setShowModal(true);
   };
   const closeModal = () => {
      setShowModal(false);
   };
   const openDropdown = () => {
      setShowDropdown(true);
   };
   const closeDropdown = () => {
      setShowDropdown(false);
   };
   const openEditModal = () => {
      setShowEditProduct(true);
   };
   const closeEditModal = () => {
      setShowEditProduct(false);
   };
   const openLoading = () => {
      setShowLoading(true);
   };
   const closeLoading = () => {
      setShowLoading(false);
   };

   return (
      <ModalContext.Provider
         value={{
            showModal,
            openModal,
            closeModal,
            openDropdown,
            closeDropdown,
            showDropdown,
            openEditModal,
            closeEditModal,
            showEditProduct,
            showLoading,
            openLoading,
            closeLoading,
         }}
      >
         {children}
      </ModalContext.Provider>
   );
}

let ctx;
const useModal = () => {
   ctx = useContext(ModalContext);
   return ctx;
};

export default ModalContextProvider;
export { useModal };
