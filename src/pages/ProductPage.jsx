import { Outlet } from "react-router-dom";

function ProductPage() {
   return (
      <div className="mainCon">
         <Outlet />
      </div>
   );
}

export default ProductPage;
