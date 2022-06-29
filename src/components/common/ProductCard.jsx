import { useAuth } from "../../contexts/AuthContext";
import ImageProduct from "./ImageProduct";
import { useCart } from "../../contexts/CartContext";
import DropdownEdit from "./DropdownEdit";

function ProductCard({ el, onClick }) {
   const { name, price, ProductImages, discount } = el;
   const { formatNumber } = useCart();
   const { user } = useAuth();
   return (
      <div
         className="flex flex-col cursor-pointer border-2 rounded-xl pop-up-2"
         onClick={onClick}
      >
         {user?.roll === "admin" ? (
            <>
               <DropdownEdit el={el} />
            </>
         ) : (
            ""
         )}
         <ImageProduct src={ProductImages[0]?.image} />
         <div className="flex justify-around items-center gap-4 p-2">
            <h2>{name}</h2>
            <div className="flex gap-2 items-center">
               {discount !== "0.00" ? (
                  <h3 className="line-through text-lightGray">{`$${formatNumber(
                     price
                  )}`}</h3>
               ) : (
                  ""
               )}
               <h2>{`$${formatNumber(
                  (price * (1 - discount)).toFixed(2)
               )}`}</h2>
               {discount !== "0.00" ? (
                  <div className="p-1 px-2 bg-red-500 rounded-xl text-center text-white">{`${
                     discount * 100
                  }%`}</div>
               ) : (
                  ""
               )}
            </div>
         </div>
      </div>
   );
}
export default ProductCard;
