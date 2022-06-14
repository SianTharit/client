import { useProduct } from "../../../contexts/ProductContext";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useCart } from "../../../contexts/CartContext";

function SidebarProducts({ productId, ProductImages }) {
   console.log(productId);
   const { productById } = useProduct();
   const { addToCart } = useCart();
   const { price, discount, name } = productById;
   console.log(".........................");
   console.log(productById, "productById");
   return (
      <>
         {productById && (
            <div className="relative space-y-40 w-[300px]">
               <div className=" space-y-5">
                  <h1>{name}</h1>
                  <div>{price * (1 - discount)}</div>
                  <img
                     src={ProductImages ? ProductImages[0]?.image : ""}
                     alt="productImage"
                     className="p-2 w-36 bg-cover"
                  />
               </div>
               <div className=" absolute top-64 space-y-5">
                  <h2>size</h2>
                  <div className=" w-[300px] h-[300px] grid grid-cols-3 grid-rows-5 ">
                     <button className="border-2 w-[84px] h-[50px] rounded-xl shadow-md bg-white">
                        US 6
                     </button>
                     <button className="border-2 w-[88px] h-[50px] rounded-xl shadow-md bg-white">
                        US 7
                     </button>
                     <button className="border-2 w-[88px] h-[50px] rounded-xl shadow-md bg-white">
                        US 8
                     </button>
                     <button className="border-2 w-[88px] h-[50px] rounded-xl shadow-md bg-white">
                        US 9
                     </button>
                     <button className="border-2 w-[88px] h-[50px] rounded-xl shadow-md bg-white">
                        US 6
                     </button>
                     <button className="border-2 w-[88px] h-[50px] rounded-xl shadow-md bg-white">
                        US 6
                     </button>
                     <button className="border-2 w-[88px] h-[50px] rounded-xl shadow-md bg-white">
                        US 6
                     </button>
                     <button className="border-2 w-[88px] h-[50px] rounded-xl shadow-md bg-white">
                        US 6
                     </button>
                     <button className="border-2 w-[88px] h-[50px] rounded-xl shadow-md bg-white">
                        US 6
                     </button>
                  </div>
               </div>
               <div className=" absolute space-y-5 bottom-7">
                  <div
                     className="flex bg-org-main rounded-3xl p-2 justify-center items-center cursor-pointer"
                     onClick={() => addToCart(productId)}
                  >
                     <h2>Add to cart</h2>
                     <ShoppingCartIcon className="w-6 h-6" />
                  </div>
                  <div className=" rounded-md border-1 bg-slate-100">
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                     </p>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default SidebarProducts;
