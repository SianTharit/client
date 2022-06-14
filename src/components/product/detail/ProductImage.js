import { useProduct } from "../../../contexts/ProductContext";
import ImageDetail from "../../common/ImageDetail";

function ProductImage({ ProductImages }) {
   // console.log(ProductImages, "ProductImage");
   const { products } = useProduct();
   // console.log(products, "productId");
   return (
      <>
         {ProductImages?.map((el) => {
            return <ImageDetail key={el.id} src={el.image} />;
         })}
      </>
   );
}
export default ProductImage;
