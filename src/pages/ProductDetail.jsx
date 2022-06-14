import ProductImage from "../components/product/detail/ProductImage";
import SidebarProducts from "../components/product/detail/SidebarProduct";
import { useEffect } from "react";
import { useProduct } from "../contexts/ProductContext";
import axios from "../config/axios";
import { useParams } from "react-router-dom";

function ProductDetail() {
   const { productById, setProductById } = useProduct();
   const { productId } = useParams();
   console.log(productById, "productById");
   useEffect(() => {
      const fetchProductId = async () => {
         try {
            const res = await axios.get("/products/" + productId);
            console.log(res.data.product, "test");
            setProductById(res.data.product);
         } catch (err) {
            console.log(err);
         }
      };
      fetchProductId();
   }, [productId, setProductById]);

   return (
      <div className="grid grid-cols-5 mt-10">
         <div className=" grid grid-cols-2 col-span-4 gap-8 p-7">
            <ProductImage ProductImages={productById.ProductImages} />
         </div>
         <div className="grid col-start-5 mt-7">
            <SidebarProducts
               productId={productId}
               ProductImages={productById.ProductImages}
            />
         </div>
      </div>
   );
}

export default ProductDetail;
