import axios from "../config/axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/reducer";
import { useNavigate } from "react-router-dom";

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
   useEffect(() => {
      fetchCart();
   }, []);

   const createOrder = async (totalPrice, orderItems) => {
      try {
         await axios.post("/orders/", {
            totalPrice,
            orderItems,
         });
      } catch (err) {
         console.log(err);
      }
   };

   // ดักจับ state cart
   // useEffect(() => {
   //    dispatch({ type: "CALCULATE_TOTAL", payload: state?.cart });
   // }, []);

   const clearItem = async () => {
      const res = await axios.delete("/carts/");
      dispatch({ type: "CLEAR_ITEM" });
   };

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
      fetchCart();
   };

   const formatNumber = (num) => {
      return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   };

   return (
      <CartContext.Provider
         value={{
            ...state,
            removeItem,
            toggleQuantity,
            addToCart,
            formatNumber,
            clearItem,
            createOrder,
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
