import { useCart } from "../../contexts/CartContext";

function PaymentSum() {
   const { total, formatNumber } = useCart();

   return (
      <div className="flex flex-col justify-center items-center gap-5 mt-3">
         <h1 className="text-org-main">Make Payment</h1>
         <h2>Total Amount: {`$${formatNumber(total)}`}</h2>
      </div>
   );
}

export default PaymentSum;
