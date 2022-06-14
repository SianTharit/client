import { useProduct } from "../../../contexts/ProductContext";
import Spinner from "../../common/Spinner";
import ButtonAddProduct from "./ButtonAddProduct";
import ProductInfo from "./ProductInfo";

function AdminPage() {
   const { handleClickAdd, loading } = useProduct();
   return (
      <div>
         {loading && <Spinner />}
         <form className=" w-full" onSubmit={handleClickAdd}>
            <div className="grid grid-cols-8 gap-4">
               <ButtonAddProduct />
            </div>
            <div className=" mt-20 space-y-5">
               <h2>General Info</h2>
               <ProductInfo />
            </div>
            <div className="grid col-start-6 col-span-3 gap-4 mt-10">
               <h2 className=" text-lightGray m-auto">
                  push product to the Market
               </h2>
               <button className="text-white bg-[#063c2c] rounded-xl p-2 w-1/2 m-auto">
                  Push
               </button>
            </div>
         </form>
      </div>
   );
}

export default AdminPage;

// value={image}
// onChange={(e) => {
//    if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//    }
// }}
// onDelete={() => setImage(null)}
