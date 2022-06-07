import defaultPic from "../../assets/images/defaultPic.jpg";
function ImageProduct({ src }) {
   return (
      <img
         src={src || defaultPic}
         className="rounded-lg object-cover w-full h-full"
         alt="product"
      />
   );
}
export default ImageProduct;
