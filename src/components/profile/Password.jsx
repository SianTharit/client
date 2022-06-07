import { KeyIcon } from "@heroicons/react/outline";
import { Icon } from "../common/Icon";
import { useAuth } from "../../contexts/AuthContext";
import { EditPassword } from "../ui/Modals";

function Password() {
   const { user } = useAuth();
   return (
      <div className="flex flex-col border-2 p-4 shadow-md rounded-xl mt-7">
         <div className="flex flex-col gap-y-5">
            <div className="flex gap-4 items-center">
               <Icon icon={<KeyIcon />} />
               <h1>Security</h1>
            </div>
            <hr />
            <div className="grid grid-cols-5 items-center">
               <h2>Password :</h2>
               <p className="grid col-span-3 items-center">********</p>
               <EditPassword />
            </div>
         </div>
      </div>
   );
}
export default Password;
