import { useCart } from "../../contexts/CartContext";
import CartBody from "./CartBody";
import CartCheckOut from "./CartCheckout";
import CartHeader from "./CartHeader";

function Cart() {
   const { cart } = useCart();
   return (
      <div className="flex flex-col space-y-2 items-end">
         <div className="mainCon">
            <CartHeader />
            <CartBody />
         </div>
         {cart?.length !== 0 ? (
            <div className=" min-w-[400px]">
               <CartCheckOut />
            </div>
         ) : (
            ""
         )}
      </div>
   );
}

export default Cart;
