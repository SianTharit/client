// กำหนด action ใน app

import axios from "../config/axios";

const reducer = (state, action) => {
   if (action.type === "FETCH_CART") {
      // console.log(action.payload);
      return {
         ...state,
         cart: action.payload,
      };
   }

   if (action.type === "REMOVE_ITEM") {
      return {
         ...state,
         cart: state.cart.filter((item) => item.id !== action.payload),
         amount: state.cart.amount,
      };
   }

   if (action.type === "CLEAR_ITEM") {
      return {
         cart: [],
         total: 0,
         amount: 0,
      };
   }

   if (action.type === "TOGGLE_QUANTITY") {
      let newCart = state.cart
         .map((item) => {
            if (item.id === action.payload.id) {
               if (action.payload.type === "increment") {
                  const clone = {
                     ...item,
                     amount: item.amount < 10 ? item.amount + 1 : item.amount,
                  };
                  const res = axios.patch("/carts/" + item.id, {
                     amount: clone.amount,
                  });
                  return clone;
               }
               if (action.payload.type === "decrement") {
                  const clone = {
                     ...item,
                     amount: item.amount - 1,
                  };
                  const res = axios.patch("/carts/" + item.id, {
                     amount: clone.amount,
                  });
                  if (clone.amount === 0) {
                     axios.delete("/carts/" + item.id);
                  }
                  return clone;
               }
            }
            return item;
         })
         .filter((item) => item.amount > 0); // filter ถ้ามีค่า = 0 นำออกไป
      return {
         ...state,
         cart: newCart,
      };
   }

   if (action.type === "CALCULATE_TOTAL") {
      // console.log(action.payload, "fffff");
      const { total, amount } = state?.cart.reduce(
         // สร้าง total amount ชื่อเดียวกับ state >>> newTotal, newAmount
         (cartTotal, item) => {
            const { amount } = item;
            const itemTotal =
               item.Product.price * amount * (1 - item.Product.discount);
            cartTotal.total += itemTotal; // += เพราะ itemTotal มันทำงานเป็นรอบๆ
            cartTotal.amount += amount; // += เพราะ amount มันทำงานเป็นรอบๆ เก็บปริมาณสินค้า
            return cartTotal;
         },
         {
            total: 0,
            amount: 0,
         }
      );
      return {
         ...state,
         total: total,
         amount: amount,
      };
   }

   if (action.type === "ADD_TO_CART") {
      console.log(state.cart);
      console.log(action.payload);
      console.log(state.total, "total ja");
      return {
         ...state,
         // total
         cart: [...state.cart, action.payload],
         // total: state.cart[0]
         //    ? Number(state.total) +
         //      Number(
         //         state.cart[0]?.Product.price *
         //            (1 - Number(state.cart[0]?.Product.discount))
         //      )
         //    : state.total,
         amount: state.amount++,
      };
   }
};

export default reducer;
