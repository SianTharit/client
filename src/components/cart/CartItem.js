import { XIcon } from "@heroicons/react/outline";
import { useCart } from "../../contexts/CartContext";

function CartItem(item) {
   const { name, image, price, amount, id } = item;
   const { removeItem, toggleQuantity, formatNumber } = useCart();
   return (
      <div>
         <div className="grid grid-cols-8 justify-center items-center">
            <div className="grid col-start-1 col-span-2 p-2 ">
               <div className="grid col-start-2 p-2">
                  <img src={image} alt="product" className=" w-32 h-32" />
               </div>
               <div className="gird col-start-3 p-2">
                  <h2>{name}</h2>
               </div>
            </div>
            <div className="gird col-start-5 p-2 justify-center">
               {`$${formatNumber(price)}`}
            </div>
            <div className="gird justify-center col-start-6 p-2">
               <div className="grid grid-cols-3">
                  <button
                     className=" py-2 bg-light-green-100 rounded-lg"
                     onClick={() => toggleQuantity(id, "increment", amount)}
                  >
                     +
                  </button>
                  <input
                     type="text"
                     value={amount}
                     disabled
                     className=" text-center"
                  />
                  <button
                     className="py-2 bg-light-green-100 rounded-lg"
                     onClick={() => toggleQuantity(id, "decrement", amount)}
                  >
                     -
                  </button>
               </div>
            </div>
            <div className="grid justify-center col-start-7 p-2">
               <h3>{`$${formatNumber(price * amount)}`}</h3>
            </div>
            <XIcon
               className="w-6 h-6 cursor-pointer"
               onClick={() => removeItem(id)}
            />
         </div>
         <hr className=" border-2 shadow-md" />
      </div>
   );
}

export default CartItem;
