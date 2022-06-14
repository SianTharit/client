import defaultPic from "../../assets/images/defaultPic.jpg";
function ImageDetail({ src }) {
   return (
      <img
         src={src || defaultPic}
         className="rounded-lg object-cover w-[464px] h-[400px] pop-up"
         alt="product"
      />
   );
}
export default ImageDetail;
