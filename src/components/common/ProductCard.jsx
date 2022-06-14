import { useAuth } from "../../contexts/AuthContext";
import { XIcon } from "@heroicons/react/outline";
import ImageProduct from "./ImageProduct";
import { useProduct } from "../../contexts/ProductContext";
import { useState } from "react";
import Spinner from "./Spinner";

function ProductCard({ el, onClick }) {
   const { name, price, ProductImages, discount, id } = el;
   const { handleClickDelete } = useProduct();
   const { user } = useAuth();
   return (
      <div
         className="flex flex-col cursor-pointer border-2 rounded-xl pop-up-2"
         onClick={onClick}
      >
         {user?.roll === "admin" ? (
            <>
               <div className="relative">
                  <button
                     className="absolute right-2 top-2 cursor-pointer pop-up"
                     onClick={(e) => {
                        e.stopPropagation();
                        handleClickDelete(id);
                     }}
                  >
                     <XIcon className="w-6 h-6" />
                  </button>
               </div>
            </>
         ) : (
            ""
         )}
         <ImageProduct src={ProductImages[0]?.image} />
         <div className="flex justify-around items-center gap-4 p-2">
            <h2>{name}</h2>
            <div className="flex gap-2 items-center">
               <h3 className="line-through text-lightGray">{`$${price}`}</h3>
               <h2>{`$${price * (1 - discount)}`}</h2>
               <div className="p-1 px-2 bg-red-500 rounded-xl text-center text-white">{`${discount}%`}</div>
            </div>
         </div>
      </div>
   );
}
export default ProductCard;
