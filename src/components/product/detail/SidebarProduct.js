import { useProduct } from "../../../contexts/ProductContext";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useCart } from "../../../contexts/CartContext";
import SizeButton from "../../common/SizeButton";

const sizes = [
   {
      id: 1,
      size: "US 6",
   },
   {
      id: 2,
      size: "US 7",
   },
   {
      id: 3,
      size: "US 8",
   },
   {
      id: 4,
      size: "US 9",
   },
   {
      id: 5,
      size: "US 10",
   },
   {
      id: 6,
      size: "US 10.5",
   },
   {
      id: 7,
      size: "US 11",
   },
   {
      id: 8,
      size: "US 11.5",
   },
   {
      id: 9,
      size: "US 12",
   },
   {
      id: 10,
      size: "US 12.5",
   },
   {
      id: 11,
      size: "US 13",
   },
   {
      id: 12,
      size: "US 14",
   },
   {
      id: 13,
      size: "US 15",
   },
   {
      id: 14,
      size: "US 16",
   },
];

function SidebarProducts({ productId, ProductImages }) {
   console.log(productId);
   const { productById } = useProduct();
   const { addToCart } = useCart();
   const { price, discount, name } = productById;
   const data = productById.ProductStocks
      ? productById?.ProductStocks?.map((item) => item?.size)
      : [];
   return (
      <>
         {productById && (
            <div className="relative space-y-40 w-[300px]">
               <div className=" space-y-5">
                  <h1>{name}</h1>
                  <div>{`$ ${(price * (1 - discount)).toFixed(2)}`}</div>
                  <img
                     src={ProductImages ? ProductImages[0]?.image : ""}
                     alt="productImage"
                     className="p-2 w-36 bg-cover shadow-lg"
                  />
               </div>
               <div className=" absolute top-64 space-y-5">
                  <h2>size</h2>
                  <div className=" w-[300px] h-[300px] grid grid-cols-3 grid-rows-5 ">
                     {sizes?.map((el) => {
                        console.log(data);
                        if (data.findIndex((i) => i !== el.size)) {
                           return (
                              <SizeButton
                                 key={el.id}
                                 size={el.size}
                                 found={true}
                              />
                           );
                        } else {
                           return <SizeButton key={el.id} size={el.size} />;
                        }
                     })}
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
