import { useProduct } from "../contexts/ProductContext";
import ProductCard from "../components/common/ProductCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "../components/common/Spinner";
import Modal from "../components/ui/Modal";
function AllProductsPage() {
   const { products, searchTerm, loading } = useProduct();
   // const [show, setShow] = useState(false)
   const navigate = useNavigate();

   const filterProduct = products.filter((ele) =>
      ele.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
      <div className="grid grid-cols-3 gap-2 mainCon mt-10">
         {loading && (
            <Modal showModal={loading}>
               <Spinner />
            </Modal>
         )}
         {filterProduct.map((el) => {
            return (
               <ProductCard
                  key={el.id}
                  el={el}
                  onClick={() => navigate(`/products/${el.id}`)}
               />
            );
         })}
      </div>
   );
}

export default AllProductsPage;
