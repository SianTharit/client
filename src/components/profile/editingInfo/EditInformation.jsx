import { useModal } from "../../../contexts/ModalContext";
import { useUser } from "../../../contexts/UserContext";
import { useState } from "react";
import Modal from "../../ui/Modal";
import { Form } from "../../../components/form/Form";
import InputYup from "../../form/InputYup";
import SubmitButton from "../../form/SubmitButton";
import * as yup from "yup";

export function EditName() {
   const { showModal, openModal, closeModal } = useModal();
   const [show, setShow] = useState(false);
   const { EditUser } = useUser();
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");

   const handleSubmitEdit = async (e) => {
      try {
         e.preventDefault();
         await EditUser(firstName, lastName, phoneNumber, undefined);
         closeModal();
         setShow(false);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <>
         <button
            type="button"
            onClick={() => {
               openModal();
               setShow(true);
            }}
            className="rounded-md greenColor bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
         >
            Edit
         </button>
         {show && (
            <Modal showModal={showModal} onClose={closeModal} setShow={setShow}>
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
                           className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                           id="grid-first-name"
                           type="text"
                           placeholder="Jane"
                           value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}
                        />
                     </div>
                     <div className="w-full md:w-1/2 px-3">
                        <label
                           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-last-name"
                        >
                           Last Name
                        </label>
                        <input
                           className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                           id="grid-last-name"
                           type="text"
                           placeholder="Doe"
                           value={lastName}
                           onChange={(e) => setLastName(e.target.value)}
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
                           className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                           id="grid-phone-number"
                           type="text"
                           placeholder="(555) 555-5555"
                           value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}
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
                     save
                  </button>
               </div>
            </Modal>
         )}
      </>
   );
}

//=========================================================//

export function EditPassword() {
   const { showModal, openModal, closeModal } = useModal();
   const [show, setShow] = useState(false);
   const { EditPassword } = useUser();

   let schema = yup.object().shape({
      oldPassword: yup
         .string()
         .required()
         .test({
            test: (value) => value.length >= 6,
            message: "Password must be at least 6 characters",
         }),
      newPassword: yup
         .string()
         .required()
         .test({
            test: (value) => value.length >= 6,
            message: "Password must be at least 6 characters",
         }),
      confirmNewPassword: yup
         .string()
         .required()
         .test({
            test: (value) => value.length >= 6,
            message: "Password must be at least 6 characters",
         }),
   });

   const handleSubmitEdit = async ({
      oldPassword,
      newPassword,
      confirmNewPassword,
   }) => {
      try {
         console.log("sdsdsd");
         const result = await EditPassword(
            oldPassword,
            newPassword,
            confirmNewPassword
         );
         if (result) {
            closeModal();
         }
         setShow(false);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <>
         <button
            type="button"
            onClick={() => {
               openModal();
               setShow(true);
            }}
            className="rounded-md greenColor bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
         >
            Edit
         </button>
         {show && (
            <Modal showModal={showModal} onClose={closeModal} setShow={setShow}>
               <Form
                  schema={schema}
                  className="w-full max-w-lg"
                  onSubmit={handleSubmitEdit}
               >
                  <div className="flex flex-wrap -mx-3 mb-6">
                     <div className="w-full px-3">
                        <label
                           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-phone-number"
                        >
                           Old Password
                        </label>
                        <InputYup
                           type="text"
                           placeholder="old password"
                           name="oldPassword"
                           rounded="md"
                        />
                     </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                     <div className="w-full px-3">
                        <label
                           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-phone-number"
                        >
                           New Password
                        </label>
                        <InputYup
                           type="text"
                           placeholder="new password"
                           name="newPassword"
                           rounded="md"
                        />
                     </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                     <div className="w-full px-3">
                        <label
                           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-phone-number"
                        >
                           Confirm New Password
                        </label>
                        <InputYup
                           type="text"
                           placeholder="confirm new password"
                           name="confirmNewPassword"
                           rounded="md"
                        />
                     </div>
                  </div>
                  <SubmitButton className="w-full inline-flex justify-center rounded-md border border-transparent bg-org-main px-4 py-2 text-sm font-medium text-white hover:bg-org-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                     save
                  </SubmitButton>
               </Form>
               <div className="mt-4"></div>
            </Modal>
         )}
      </>
   );
}

export function EditAddress() {
   const { showModal, openModal, closeModal } = useModal();
   const [show, setShow] = useState(false);
   const { EditUser } = useUser();
   const [address, setAddress] = useState("");

   const handleSubmitEdit = async (e) => {
      try {
         e.preventDefault();
         await EditUser(undefined, undefined, undefined, address);
         closeModal();
         setShow(false);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <>
         <button
            type="button"
            onClick={() => {
               openModal();
               setShow(true);
            }}
            className="rounded-md greenColor bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
         >
            Edit
         </button>
         {show && (
            <Modal showModal={showModal} onClose={closeModal} setShow={setShow}>
               <form className="w-full max-w-lg">
                  <div className="flex flex-wrap -mx-3 mb-6">
                     <div className="w-full px-3">
                        <label
                           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-phone-number"
                        >
                           Address
                        </label>
                        <input
                           className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 px-20"
                           id="grid-phone-number"
                           type="text"
                           placeholder="33/33 mt F."
                           value={address}
                           onChange={(e) => setAddress(e.target.value)}
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
                     save
                  </button>
               </div>
            </Modal>
         )}
      </>
   );
}
