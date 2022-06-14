import { useProduct } from "../contexts/ProductContext";
import ProductCard from "../components/common/ProductCard";
import { useNavigate } from "react-router-dom";

function AllProductsPage() {
   const { products } = useProduct();
   const navigate = useNavigate();
   return (
      <div className="grid grid-cols-3 gap-2 mainCon mt-10">
         {products.map((el) => {
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
