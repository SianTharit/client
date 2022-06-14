import { useState } from "react";
import ButtonBanking from "../components/payment/ButtonBanking";
import ButtonCredit from "../components/payment/ButtonCredit";
import FormPayment from "../components/payment/form/FromPayment";
import PaymentSum from "../components/payment/PaymentSum";
import axios from "../config/axios";
import { useCart } from "../contexts/CartContext";

function PaymentPage() {
   const { total } = useCart();
   const [state, setState] = useState();
   const [charge, setCharge] = useState(undefined);
   const clearCart = () => {};
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
            setCharge({ resData });
         }
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <div className="flex flex-col justify-center items-center gap-4">
         <PaymentSum />
         <FormPayment />
         <ButtonCredit createCreditCardCharge={createCreditCardCharge} />
         <ButtonBanking />
         {charge && (
            <div className=" flex flex-col justify-center items-center gap-2">
               <h2 className=" text-coco">
                  Thank you for your payment with credit card.
               </h2>
               <p className=" text-lg text-coco">
                  Your payment amount is{" "}
                  <span className=" text-blue-500">${total}.</span>
                  Status <span>{charge.status}</span>
               </p>
            </div>
         )}
      </div>
   );
}

export default PaymentPage;
