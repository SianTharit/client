import BodyHome from "./BodyHome";
import HeaderHome from "./HeaderHome";
import Footer from "../layout/Footer";

function ContainerHome() {
   return (
      <div className="mainCon space-y-10">
         <HeaderHome />
         <BodyHome />
      </div>
   );
}
export default ContainerHome;
