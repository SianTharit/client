import { KeyIcon } from "@heroicons/react/outline";
import { Icon } from "../common/Icon";
import { EditPassword } from "../../components/profile/editingInfo/EditInformation";

function Password() {
   return (
      <div className="flex flex-col border-2 p-4 shadow-md rounded-xl mt-7 relative">
         <div className="flex gap-4 items-center">
            <div className="absolute right-3 top-3">
               <EditPassword />
            </div>
         </div>
         <div className="flex flex-col gap-y-5">
            <div className="flex gap-4 items-center">
               <Icon icon={<KeyIcon />} />
               <h1>Security</h1>
            </div>
            <hr />
            <div className="grid grid-cols-5 items-center">
               <h2>Password :</h2>
               <p className="grid col-span-3 items-center">********</p>
            </div>
         </div>
      </div>
   );
}
export default Password;
