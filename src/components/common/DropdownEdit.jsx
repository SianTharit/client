import { DotsVerticalIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useModal } from "../../contexts/ModalContext";
import { useProduct } from "../../contexts/ProductContext";
import Modal from "../../components/ui/Modal";

function DropdownEdit({ el }) {
   const {
      name: productName,
      price: productPrice,
      discount: productDiscount,
      id,
   } = el;
   const { showEditProduct, openEditModal, closeEditModal } = useModal();
   const { handleClickDelete } = useProduct();
   const [showDropdownEdit, setShowDropdownEdit] = useState(false);
   const { editProduct, loading } = useProduct();
   const [name, setName] = useState(productName || "");
   const [price, setPrice] = useState(productPrice || "");
   const [discount, setDiscount] = useState(productDiscount || "");
   const [show, setShow] = useState(false);

   const openDropdownEdit = () => {
      setShowDropdownEdit((prev) => !prev);
   };
   const closeDropdownEdit = () => {
      setShowDropdownEdit(false);
   };

   const handleSubmitEdit = async (e) => {
      try {
         e.preventDefault();
         await editProduct(id, name, price, discount);
         closeEditModal();
         setShow(false);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <div className="relative inline-block text-left">
         <div className="flex justify-center items-center ">
            <button
               className="absolute right-2 top-2 cursor-pointer pop-up"
               onClick={(e) => {
                  e.stopPropagation();
                  openDropdownEdit();
               }}
            >
               <DotsVerticalIcon className="w-6 h-6" />
            </button>
         </div>
         {showDropdownEdit ? (
            <div>
               <div className="relative top-7 right-3">
                  <div
                     className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                     onClick={(e) => e.stopPropagation()}
                  >
                     <div className="py-1">
                        <div
                           to="/profile"
                           className=" group flex items-center px-4 py-2 text-sm text-gray-700 hover:orgColor hover:text-white"
                           onClick={openEditModal}
                        >
                           Edit
                        </div>
                        <div
                           to="/profile"
                           className=" group flex items-center px-4 py-2 text-sm text-gray-700 hover:orgColor hover:text-white"
                           onClick={() => handleClickDelete(id)}
                        >
                           delete
                        </div>
                     </div>
                  </div>
               </div>
               {showDropdownEdit && (
                  <>
                     <Modal
                        showModal={showEditProduct}
                        onClose={closeEditModal}
                        setShow={setShow}
                     >
                        <form className="w-full max-w-lg">
                           <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                 <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-first-name"
                                 >
                                    Product Name
                                 </label>
                                 <input
                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                 />
                              </div>
                              <div className="w-full md:w-1/2 px-3">
                                 <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-last-name"
                                 >
                                    Price
                                 </label>
                                 <input
                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                 />
                              </div>
                           </div>
                           <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-3">
                                 <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-phone-number"
                                 >
                                    Discount
                                 </label>
                                 <input
                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text"
                                    value={discount}
                                    onChange={(e) =>
                                       setDiscount(e.target.value)
                                    }
                                 />
                              </div>
                           </div>
                        </form>
                        <div className="mt-4">
                           <button
                              type="button"
                              className=" w-full inline-flex justify-center rounded-md border border-transparent bg-org-main px-4 py-2 text-sm font-medium text-white hover:bg-org-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={handleSubmitEdit}
                           >
                              EDIT
                           </button>
                        </div>
                     </Modal>
                  </>
               )}
            </div>
         ) : (
            ""
         )}
      </div>
   );
}
export default DropdownEdit;
