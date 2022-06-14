import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";
import PaymentPage from "../pages/PaymentPage";
import LoginPage from "../pages/LoginPage";
import AuthLayout from "../components/layout/AuthLayout";
import ProductDetail from "../pages/ProductDetail";
import CartPage from "../pages/CartPage";
import Sidebar from "../components/profile/sidebar/SidebarProfile";
import AllProductsPage from "../pages/AllProductsPage";

function Router() {
   return (
      <Routes>
         <Route path="/" element={<AuthLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="profile" element={<Sidebar />}>
               <Route path="" element={<ProfilePage />} />
               <Route path="address" element={<ProfilePage />} />
               <Route path="admin" element={<ProfilePage />} />
            </Route>
            <Route path="allProducts" element={<AllProductsPage />} />
            <Route path="products" element={<ProductPage />}>
               <Route path=":productId" element={<ProductDetail />} />
            </Route>
            <Route path="checkout" element={<PaymentPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="login" element={<LoginPage />} />
         </Route>
      </Routes>
   );
}

export default Router;
