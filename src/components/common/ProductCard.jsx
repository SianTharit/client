import ImageProduct from "./ImageProduct";

function ProductCard({ el, onClick }) {
   const { title, description, price, src, discount, resultPrice } = el;
   return (
      <div
         className="flex flex-col cursor-pointer border-2 rounded-xl pop-up-2"
         onClick={onClick}
      >
         <ImageProduct src={src} />
         <div className="grid grid-cols-2 items-center py-4 px-4">
            <div className="grid grid-cols-1 gap-x-3">
               <h2>{title}</h2>
               <p>{description}</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
               <h3 className="line-through text-lightGray">{`$${price}`}</h3>
               <h2>{`$${resultPrice}`}</h2>
               <div className="p-1 bg-red-500 rounded-xl text-center text-white">{`${discount}%`}</div>
            </div>
         </div>
      </div>
   );
}
export default ProductCard;
