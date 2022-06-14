import { useCart } from "../../contexts/CartContext";
import CartItem from "./CartItem";
import NoItemInCart from "./NoItemInCart";

function CartBody() {
   const { cart } = useCart();

   if (cart?.length === 0) {
      return <NoItemInCart />;
   } else {
      return (
         <>
            {cart?.map((item) => {
               return (
                  <CartItem
                     key={item.id}
                     name={item.Product.name}
                     id={item.id}
                     image={item.Product.ProductImages[0].image}
                     price={item.Product.price * (1 - item.Product.discount)}
                     amount={item.amount}
                  />
               );
            })}
         </>
      );
   }
}

export default CartBody;
