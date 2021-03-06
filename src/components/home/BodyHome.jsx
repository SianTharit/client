import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";
import { useProduct } from "../../contexts/ProductContext";
import BlockTime from "../common/BlockTime";
import CardType from "../common/CardType";
import ProductCard from "../common/ProductCard";
import Spinner from "../common/Spinner";
import Modal from "../ui/Modal";

// const product = [
//    {
//       id: 1,
//       title: "Nike",
//       description: "Men' Shoes",
//       price: "200",
//       discount: "10",
//       resultPrice: "180",
//       src: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_445,c_limit/fe91a12e-4477-490a-9298-f9f2fc8bd344/air-huarache-shoes-Vvl0cN.png",
//    },
//    {
//       id: 2,
//       title: "Nike Air",
//       description: "Women's Shoes",
//       price: "200",
//       discount: "10",
//       resultPrice: "180",

//       src: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_445,c_limit/fe91a12e-4477-490a-9298-f9f2fc8bd344/air-huarache-shoes-Vvl0cN.png",
//    },
//    {
//       id: 3,
//       title: "Nike Air",
//       description: "Women's Shoes",
//       price: "200",
//       discount: "10",
//       resultPrice: "180",

//       src: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_445,c_limit/fe91a12e-4477-490a-9298-f9f2fc8bd344/air-huarache-shoes-Vvl0cN.png",
//    },
//    {
//       id: 4,
//       title: "Nike",
//       description: "Men' Shoes",
//       price: "200",
//       discount: "10",
//       resultPrice: "180",

//       src: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_445,c_limit/fe91a12e-4477-490a-9298-f9f2fc8bd344/air-huarache-shoes-Vvl0cN.png",
//    },
//    {
//       id: 5,
//       title: "Nike Air",
//       description: "Women's Shoes",
//       price: "200",
//       discount: "10",
//       resultPrice: "180",

//       src: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_445,c_limit/fe91a12e-4477-490a-9298-f9f2fc8bd344/air-huarache-shoes-Vvl0cN.png",
//    },
//    {
//       id: 6,
//       title: "Nike Air",
//       description: "Women's Shoes",
//       price: "200",
//       discount: "10",
//       resultPrice: "180",

//       src: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_445,c_limit/fe91a12e-4477-490a-9298-f9f2fc8bd344/air-huarache-shoes-Vvl0cN.png",
//    },
// ];

const Types = [
   {
      id: 1,
      title: "Men's",
      src: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_360,c_limit/54238927-c5aa-46a3-abff-25162b3b1fd7/nike-just-do-it.png",
      to: "allProducts",
   },
   {
      id: 2,
      title: "Women's",
      src: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_360,c_limit/e64cc521-c652-49bd-bf62-f04cf9cb6b60/nike-just-do-it.png",
      to: "allProducts",
   },
   {
      id: 3,
      title: "Kids'",
      src: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_360,c_limit/aa8d60e4-d556-4022-9f83-9058601c20a4/nike-just-do-it.png",
      to: "allProducts",
   },
];

function BodyHome() {
   const navigate = useNavigate();
   const { products, loading } = useProduct();
   const [timerDays, setTimerDays] = useState();
   const [timerHours, setTimerHours] = useState();
   const [timerMinutes, setTimerMinutes] = useState();
   const [timerSeconds, setTimerSeconds] = useState();
   const [show, setShow] = useState(false);

   let interval;

   const startTimer = () => {
      const countDownDate = new Date("June 30, 2022").getTime();
      console.log(countDownDate);

      interval = setInterval(() => {
         const now = new Date().getTime();
         const distance = countDownDate - now;

         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
         const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
         );

         const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
         );

         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

         if (distance < 0) {
            //stop timer
            clearInterval(interval.current);
         } else {
            // Update Timer
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
         }
      }, 1000);
   };

   useEffect(() => {
      startTimer();
   }, []);

   return (
      <>
         {/* ====================== Flash Sale ============================ */}
         <div className="space-y-6">
            <div className=" flex justify-around items-center font-bold greenColor rounded-md">
               <h1 className="text-light-green-200">Flash Sale</h1>
               <div className="flex items-center justify-center font-bold space-x-4">
                  <div>
                     <h2>Special Price</h2>
                     <small>Time out</small>
                  </div>
                  <div className="flex gap-2">
                     <BlockTime
                        timerDays={timerDays}
                        timerHours={timerHours}
                        timerMinutes={timerMinutes}
                        timerSeconds={timerSeconds}
                     />
                  </div>
               </div>
            </div>

            {/* ======================= CardProduct ===================== */}

            <div className="grid grid-cols-3 gap-2">
               {loading && (
                  <Modal
                     setShow={setShow}
                     showModal={loading}
                     // onClose={closeLoading}
                  >
                     <Spinner />
                  </Modal>
               )}
               {products.map((el) => {
                  if (el.discount > 0) {
                     return (
                        <ProductCard
                           key={el.id}
                           el={el}
                           onClick={() => navigate(`/products/${el.id}`)}
                        />
                     );
                  }
               })}
            </div>
         </div>
         <div className="space-y-6">
            <h1 className="font-bold">More Nike</h1>
            <div className="grid grid-cols-3 gap-2">
               {Types.map((el) => (
                  <CardType key={el.id} el={el} to={el.to} />
               ))}
            </div>
         </div>
      </>
   );
}
export default BodyHome;
