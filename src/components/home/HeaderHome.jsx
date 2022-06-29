import { useNavigate } from "react-router-dom";
import pic1 from "../../assets/images/pic1.png";

function HeaderHome() {
   const navigate = useNavigate();
   return (
      <div>
         <div className="flex flex-col justify-center items-center p-2  bg-light-gray text-coco">
            <h2>Free Delivery for you</h2>
            <small
               className="underline hover:text-org-main cursor-pointer"
               onClick={() => navigate("/allProducts")}
            >
               view more items
            </small>
         </div>
         <div>
            <img src={pic1} alt="" />
         </div>
      </div>
   );
}
export default HeaderHome;
