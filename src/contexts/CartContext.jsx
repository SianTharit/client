import axios from "../config/axios";
import {
   createContext,
   useContext,
   useEffect,
   useReducer,
   useState,
} from "react";
import reducer from "../reducer/reducer";
import { useNavigate } from "react-router-dom";

// const CartData = [
//    {
//       id: 1,
//       name: "Niker",
//       image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/310e0b15-4a48-4c91-aec1-e9d6708951a4/air-jordan-1-zoom-cmft-shoes-mDxHSk.png",
//       price: 2000,
//       quantity: 1,
//    },
//    {
//       id: 2,
//       name: "Nikes",
//       image: "https://s                                                   tatic.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/zwxes8uud05rkuei1mpt/air-max-90-shoes-mnCmVT.png",
//       price: 500,
//       quantity: 1,
//    },
//    {
//       id: 3,
//       name: "Nika",
//       image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bf85158d-b59e-42ec-bec5-39555d23fc33/air-max-90-g-golf-shoes-LMWm0d.png",
//       price: 1000,
//       quantity: 1,
//    },
// ];

const initState = {
   cart: [],
   total: 0,
   amount: 0,
};
const CartContext = createContext();

const CartContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initState);
   const navigate = useNavigate();

   console.log("----------->>>>>>");
   console.log(state?.cart);
   useEffect(() => {
      const fetchCart = async () => {
         try {
            const res = await axios.get("/carts");
            dispatch({ type: "FETCH_CART", payload: res.data.cart });
            dispatch({ type: "CALCULATE_TOTAL", payload: state?.cart });
            // console.log(res.data.cart, "Test");
         } catch (err) {
            console.log(err);
         }
      };
      fetchCart();
   }, []);

   // ดักจับ state cart
   // useEffect(() => {
   //    dispatch({ type: "CALCULATE_TOTAL", payload: state?.cart });
   // }, []);

   const removeItem = async (id) => {
      const res = await axios.delete("/carts/" + id);
      dispatch({ type: "REMOVE_ITEM", payload: id });
   };

   const toggleQuantity = async (id, type) => {
      // const res = await axios.patch("/carts/" + id, { amount });
      dispatch({ type: "TOGGLE_QUANTITY", payload: { id, type } });
      dispatch({ type: "CALCULATE_TOTAL", payload: state?.cart });
   };

   const addToCart = async (productId) => {
      const res = await axios.post("/carts/" + productId);
      navigate("/cart");
      dispatch({ type: "ADD_TO_CART", payload: res.data.cart });
   };

   const formatNumber = (num) => {
      return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
   };

   return (
      <CartContext.Provider
         value={{
            ...state,
            removeItem,
            toggleQuantity,
            addToCart,
            formatNumber,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};

export default CartContextProvider;

function useCart() {
   const ctx = useContext(CartContext);
   return ctx;
}

export { useCart };
