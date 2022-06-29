import { HomeIcon } from "@heroicons/react/outline";
import { Icon } from "../common/Icon";
import { useUser } from "../../contexts/UserContext";
import { EditAddress } from "../../components/profile/editingInfo/EditInformation";

function Address() {
   const { user } = useUser();
   const { address, firstName, lastName, phoneNumber } = user;
   return (
      <div className="flex flex-col gap-y-5 border-2 p-4 shadow-md rounded-xl relative">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               <Icon icon={<HomeIcon />} />
               <h1>My Address</h1>
               <div className="absolute right-3 top-3">
                  <EditAddress />
               </div>
            </div>
         </div>
         <p className="text-lightGray">you can edit your address</p>
         <hr />
         <div className="flex flex-col">
            <div className="flex flex-col relative">
               <div className="grid grid-cols-2">
                  <div className="grid grid-cols-3 items-center">
                     <h2>Your name :</h2>
                     <span className="grid col-span-2">
                        {firstName || ""}
                        {lastName || ""}
                     </span>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                     <h2>Phone number :</h2>
                     <p className="grid">{phoneNumber || ""}</p>
                  </div>
                  <div className="grid grid-cols-3 items-center">
                     <h2>Address :</h2>
                     <p className="grid col-span-2">{address || ""}</p>
                  </div>
               </div>
               <hr />
            </div>
         </div>
      </div>
   );
}
export default Address;
