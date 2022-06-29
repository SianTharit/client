import axios from "../../config/axios";
import { useEffect } from "react";
import Script from "react-load-script";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";

let OmiseCard;

function ButtonCredit({ createCreditCardCharge }) {
   const { total, cart, createOrder } = useCart();
   const { user } = useAuth();

   console.log("state test");
   console.log(cart);
   const handleLoadScript = () => {
      console.log(window.Omise);
      OmiseCard = window.OmiseCard;
      OmiseCard?.configure({
         publicKey: "pkey_test_5s47w1svso5q4m0904n",
         currency: "$",
         frameLabel: "Nike Shop",
         submitLabel: "PAY NOW",
         buttonLabel: "Pay with Omise",
      });
   };

   const creditCardConfigure = () => {
      OmiseCard?.configure({
         defaultPaymentMethods: "credit_card",
         otherPaymentMethods: [],
      });
      OmiseCard?.configureButton("#credit-card"); //ตัวเชื่อม ให้ button by id
      OmiseCard?.attach();
   };

   const omiseCartHandler = () => {
      OmiseCard.open({
         frameDescription: "Invoice #3847",
         amount: total * 100,
         onCreateTokenSuccess: (token) => {
            console.log(token);
            createCreditCardCharge(user.email, user.username, total, token);
         },
         onFormClosed: () => {},
      });
   };

   const handleClick = (e) => {
      e.preventDefault(); // ป้องกัน page load
      creditCardConfigure();
      omiseCartHandler();
      createOrder(total, cart);
   };

   return (
      <div>
         <Script
            url="https://cdn.omise.co/omise.js"
            onLoad={handleLoadScript}
         />
         <form>
            <button
               id="credit-card"
               type="button"
               className=" bg-org-main p-2 rounded-xl cursor-pointer text-center text-white hover:bg-org-dark"
               onClick={handleClick}
               disabled={total === 0}
            >
               Pay with Credit Card
            </button>
         </form>
      </div>
   );
}

export default ButtonCredit;
