import { useNavigate } from "react-router-dom";

function CardType({ el }) {
   const { src, title, to } = el;
   const navigate = useNavigate();
   return (
      <div className="relative" onClick={() => navigate("/product/" + to)}>
         <img
            src={src}
            alt="type"
            className="object-cover w-full h-full rounded-md cursor-pointer"
         />
         <button className="absolute bottom-8 left-10 p-2  bg-light-sidebar rounded-3xl hover:bg-light-green-100">
            {title}
         </button>
      </div>
   );
}
export default CardType;
