import axios from "../../../config/axios";
import { useEffect } from "react";
import { useState } from "react";
import OrderItems from "./OrderItem";

function OrderPage() {
   const [orders, setOrders] = useState([]);

   useEffect(() => {
      const fetchOrder = async () => {
         try {
            const res = await axios.get("/orders/");
            setOrders(res.data.order);
         } catch (err) {
            console.log(err);
         }
      };
      fetchOrder();
   }, []);

   return (
      <div>
         {orders?.map((el, idx) => {
            console.log(orders);
            return el.OrderItems.map((item) => {
               console.log(el.OrderItems);
               return (
                  <OrderItems
                     totalPrice={el.totalPrice}
                     key={item.id}
                     name={item.Product.name}
                     image={item.Product.ProductImages[0].image}
                     orderAmount={item.orderAmount}
                  />
               );
            });
         })}
      </div>
   );
}
export default OrderPage;
