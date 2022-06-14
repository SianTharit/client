import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function NoItemInCart() {
   return (
      <div className=" space-y-10 p-10">
         <div className="mainCon flex flex-col justify-center items-center">
            <ShoppingCartIcon className=" w-20 h-20 text-lightGray" />
            <h1 className="text-lightGray">No item in the Cart</h1>
         </div>
         <hr className=" border-2" />
         <Link
            to="/"
            className="p-3 max-w-sm bg-org-main rounded-lg text-white block text-center mx-auto"
         >
            Back to Shop
         </Link>
      </div>
   );
}

export default NoItemInCart;
