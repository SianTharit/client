import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
function CartCheckOut() {
   const { total, formatNumber } = useCart();
   console.log("total", total);
   const navigate = useNavigate();
   return (
      <>
         <div className=" flex flex-col flex-1 mt-12">
            <div className="flex flex-col space-y-2">
               <div className=" flex justify-between">
                  <h3>Subtotal</h3>
                  <h3>{`$${formatNumber(total.toFixed(2))}`}</h3>
               </div>
               <div className=" flex justify-between">
                  <h3>Shipping fee</h3>
                  <h3>$0</h3>
               </div>
               <div className=" flex justify-between">
                  <h3>Coupon</h3>
                  <h3>No</h3>
               </div>
               <hr className=" border-2 shadow-md" />
            </div>
            <div className="flex flex-col space-y-2 mt-4">
               <div className="flex justify-between">
                  <h2>TOTAL</h2>
                  <h3>{`$${formatNumber(total.toFixed(2))}`}</h3>
               </div>
               <button
                  className="py-2 bg-org-main text-white"
                  onClick={() => navigate("/checkout")}
               >
                  Check Out
               </button>
            </div>
         </div>
      </>
   );
}

export default CartCheckOut;
