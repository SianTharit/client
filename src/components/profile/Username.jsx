import { BriefcaseIcon } from "@heroicons/react/outline";
import { Icon } from "../common/Icon";
import { useUser } from "../../contexts/UserContext";
import { EditName } from "../../components/profile/editingInfo/EditInformation";

function Username() {
   const { user } = useUser();
   const { username, firstName, lastName, phoneNumber, email } = user;
   return (
      <div className="flex flex-col gap-y-5 border-2 p-4 shadow-md rounded-xl relative">
         <div className="flex gap-4 items-center">
            <Icon icon={<BriefcaseIcon />} />
            <h1>Personal Information ({username})</h1>
            <div className="absolute right-3 top-3">
               <EditName />
            </div>
         </div>
         <p className="text-lightGray">you can edit your profile</p>
         <hr />
         <div className="flex flex-col">
            <div className="flex flex-col">
               <div className="grid grid-cols-5 items-center">
                  <h2>Your name :</h2>
                  <span className="grid col-span-3">
                     {firstName || ""}
                     {lastName || ""}
                  </span>
               </div>
               <div className="grid grid-cols-5 items-center">
                  <h2>Phone number :</h2>
                  <p className="grid col-span-3">{phoneNumber || ""}</p>
               </div>
               <hr />
               <div className="grid grid-cols-5 items-center">
                  <h2>email :</h2>
                  <p className="grid col-span-3">{email}</p>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Username;
