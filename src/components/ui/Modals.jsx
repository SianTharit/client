import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import SubmitButton from "../form/SubmitButton";
import { useUser } from "../../contexts/UserContext";

export function EditInfo() {
   const [isOpen, setIsOpen] = useState(false);
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const { EditUser } = useUser();

   const closeModal = () => {
      setIsOpen(false);
   };

   const openModal = () => {
      setIsOpen(true);
   };

   const handleSubmitEdit = async (e) => {
      try {
         e.preventDefault();
         await EditUser(firstName, lastName, phoneNumber, undefined);
         setIsOpen(false);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <>
         <button
            type="button"
            onClick={openModal}
            className="rounded-md greenColor bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
         >
            Edit
         </button>

         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
               </Transition.Child>

               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                     >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                           <div className="flex flex-wrap -mx-3 mb-6">
                              <form className="w-full max-w-lg">
                                 <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                       <label
                                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                          htmlFor="grid-first-name"
                                       >
                                          First Name
                                       </label>
                                       <input
                                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                          id="grid-first-name"
                                          type="text"
                                          placeholder="Jane"
                                          value={firstName}
                                          onChange={(e) =>
                                             setFirstName(e.target.value)
                                          }
                                       />
                                       <p className="text-red-500 text-xs italic">
                                          Please fill out this field.
                                       </p>
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                       <label
                                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                          htmlFor="grid-last-name"
                                       >
                                          Last Name
                                       </label>
                                       <input
                                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                          id="grid-last-name"
                                          type="text"
                                          placeholder="Doe"
                                          value={lastName}
                                          onChange={(e) =>
                                             setLastName(e.target.value)
                                          }
                                       />
                                    </div>
                                 </div>
                                 <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                       <label
                                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                          htmlFor="grid-phone-number"
                                       >
                                          Phone Number
                                       </label>
                                       <input
                                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                          id="grid-phone-number"
                                          type="text"
                                          placeholder="(555) 555-5555"
                                          value={phoneNumber}
                                          onChange={(e) =>
                                             setPhoneNumber(e.target.value)
                                          }
                                       />
                                       <p className="text-gray-600 text-xs italic">
                                          Make it as long and as crazy as you'd
                                          like
                                       </p>
                                    </div>
                                 </div>
                              </form>
                           </div>
                           <div className="mt-4">
                              <button
                                 type="button"
                                 className=" w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                 onClick={handleSubmitEdit}
                              >
                                 save
                              </button>
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   );
}

// ============================================================================================ //

export function EditPassword() {
   const [isOpen, setIsOpen] = useState(false);
   const [oldPassword, setPassword] = useState();
   const [newPassword, setNewPassword] = useState();
   const [confirmPassword, setConfirmPassword] = useState();

   function closeModal() {
      setIsOpen(false);
   }

   function openModal() {
      setIsOpen(true);
   }

   return (
      <>
         <button
            type="button"
            onClick={openModal}
            className="rounded-md greenColor bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
         >
            Edit
         </button>

         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
               </Transition.Child>

               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                     >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                           <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-3">
                                 <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-password"
                                    type="password"
                                    placeholder="Old Password"
                                 />
                                 <p className="text-red-500 text-xs italic">
                                    Please fill out this field.
                                 </p>
                              </div>
                              <div className="w-full px-3">
                                 <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-password"
                                    type="password"
                                    placeholder="New Password"
                                 />
                                 <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-password"
                                    type="password"
                                    placeholder="Confirm New Password"
                                 />
                              </div>
                           </div>
                           <div className="mt-4">
                              <SubmitButton
                                 type="button"
                                 className=" w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                 onClick={closeModal}
                              >
                                 save
                              </SubmitButton>
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   );
}

// ============================================================================================ //

export function EditAddress() {
   const [isOpen, setIsOpen] = useState(false);
   const [address, setAddress] = useState("");
   const { EditUser } = useUser();

   const closeModal = () => {
      setIsOpen(false);
   };

   const openModal = () => {
      setIsOpen(true);
   };

   const handleSubmitEdit = async (e) => {
      try {
         e.preventDefault();
         await EditUser(undefined, undefined, undefined, address);
         setIsOpen(false);
      } catch (err) {
         console.log(err);
      }
   };

   console.log(isOpen);
   return (
      <>
         <button
            type="button"
            onClick={openModal}
            className="rounded-md greenColor bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
         >
            Edit
         </button>

         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
               </Transition.Child>

               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                     >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                           <div className="flex flex-wrap -mx-3 mb-6">
                              <form className="w-full max-w-lg">
                                 <div className="flex flex-wrap -mx-3 mb-6"></div>
                                 <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                       <label
                                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                          htmlFor="grid-phone-number"
                                       >
                                          Address
                                       </label>
                                       <input
                                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                          id="grid-phone-number"
                                          type="text"
                                          placeholder="123 Main St"
                                          value={address}
                                          onChange={(e) =>
                                             setAddress(e.target.value)
                                          }
                                       />
                                       <p className="text-gray-600 text-xs italic">
                                          Make it as long and as crazy as you'd
                                          like
                                       </p>
                                    </div>
                                 </div>
                              </form>
                           </div>
                           <div className="mt-4">
                              <button
                                 type="button"
                                 className=" w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                 onClick={handleSubmitEdit}
                              >
                                 save
                              </button>
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   );
}

// ============================================================================ //

export function AddAddress() {
   let [isOpen, setIsOpen] = useState(false);

   function closeModal() {
      setIsOpen(false);
   }

   function openModal() {
      setIsOpen(true);
   }

   return (
      <>
         <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
         >
            Add address
         </button>

         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
               </Transition.Child>

               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                     >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                           <div className="flex flex-wrap -mx-3 mb-6">
                              <form className="w-full max-w-lg">
                                 <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                       <label
                                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                          htmlFor="grid-first-name"
                                       >
                                          First Name - Last Name
                                       </label>
                                       <input
                                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                          id="grid-first-name"
                                          type="text"
                                          placeholder="Jane Doe"
                                       />
                                       <p className="text-red-500 text-xs italic">
                                          Please fill out this field.
                                       </p>
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                       <label
                                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                          htmlFor="grid-last-name"
                                       >
                                          Phone Number
                                       </label>
                                       <input
                                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                          id="grid-last-name"
                                          type="text"
                                          placeholder="555-555-5555"
                                       />
                                    </div>
                                 </div>
                                 <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                       <label
                                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                          htmlFor="grid-password"
                                       >
                                          Address
                                       </label>
                                       <input
                                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                          id="grid-password"
                                          type="password"
                                          placeholder="333 Main St"
                                       />
                                       <p className="text-gray-600 text-xs italic">
                                          Make it as long and as crazy as you'd
                                          like
                                       </p>
                                    </div>
                                 </div>
                              </form>
                           </div>
                           <div className="mt-4">
                              <SubmitButton
                                 type="button"
                                 className=" w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                 onClick={closeModal}
                              >
                                 save
                              </SubmitButton>
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   );
}
