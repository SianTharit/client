import { UploadIcon, XIcon } from "@heroicons/react/outline";
import { useProduct } from "../../../contexts/ProductContext";

function ButtonAddProduct() {
   const { setImage, image } = useProduct();

   console.log(image);
   console.log(typeof image);
   return (
      <>
         <button
            className=" absolute p-2 rounded-2xl top-0 right-0"
            onClick={() => setImage(null)}
         >
            clear photos
         </button>
         {!image?.length ? (
            <label className=" bg-slate-300 p-5 col-span-2 grid grid-flow-row row-span-6 rounded-xl shadow-md">
               <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => {
                     if (e.target.files) {
                        setImage(e.target.files);
                     }
                  }}
               />
               <UploadIcon className=" text-lightGray" />
            </label>
         ) : (
            <>
               {Array.from(image).map((el) => (
                  <>
                     <label className="relative col-span-2 grid grid-flow-row row-span-6 rounded-xl shadow-md">
                        <img
                           className="w-full h-full object-cover"
                           src={URL.createObjectURL(el)}
                           alt="photos"
                        />
                     </label>
                  </>
               ))}
            </>
         )}
      </>
   );
}

export default ButtonAddProduct;
