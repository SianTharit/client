import { useState } from "react";
import ButtonBanking from "../components/payment/ButtonBanking";
import ButtonCredit from "../components/payment/ButtonCredit";
import FormPayment from "../components/payment/form/FromPayment";
import PaymentSum from "../components/payment/PaymentSum";
import axios from "../config/axios";
import { useCart } from "../contexts/CartContext";

function PaymentPage() {
   const { total, clearItem } = useCart();
   const [charge, setCharge] = useState(undefined);
   const createCreditCardCharge = async (email, name, total, token) => {
      try {
         const res = await axios.post(
            "/checkout-credit-card",
            {
               email,
               name,
               total,
               token,
            },
            {
               headers: {
                  "Content-Type": "application/json",
               },
            }
         );
         const resData = res.data;
         console.log(resData);
         if (resData) {
            setCharge({ ...resData });
            clearItem();
         }
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <div className="flex flex-col justify-center items-center gap-4 mt-2 py-24">
         {!charge ? (
            <>
               <PaymentSum />
               <FormPayment />
               <ButtonCredit createCreditCardCharge={createCreditCardCharge} />
            </>
         ) : (
            ""
         )}
         {charge && (
            <div className=" flex flex-col justify-center items-center gap-2 py-24">
               <h2 className=" text-coco">
                  Thank you for your payment with credit card.
               </h2>
               <p className=" text-lg text-coco">
                  Your payment amount is{" "}
                  <span className=" text-blue-500">${charge.amount}.</span>
                  Status:
                  <span
                     className={
                        charge.status === "successful"
                           ? "text-green-500"
                           : "text-red-500"
                     }
                  >
                     {charge.status}
                  </span>
               </p>
            </div>
         )}
      </div>
   );
}

export default PaymentPage;
