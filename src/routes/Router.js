import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import { useAuth } from "../contexts/AuthContext";
import AuthLayout from "../components/layout/AuthLayout";
import AuthLayoutAdmin from "../components/layout/AuthLayoutAdmin";
import ProductDetail from "../pages/ProductDetail";
import ProductCategory from "../pages/ProductCategory";
import CartPage from "../pages/CartPage";
import Sidebar from "../components/profile/sidebar/SidebarProfile";

function Router() {
   const { user } = useAuth();
   return (
      <Routes>
         <Route path="/" element={<AuthLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="profile" element={<Sidebar />}>
               <Route path="" element={<ProfilePage />} />
               <Route path="address" element={<ProfilePage />} />
            </Route>
            <Route path="products" element={<ProductPage />}>
               <Route path="men" element={<ProductCategory />} />
               <Route path="women" element={<ProductCategory />} />
               <Route path="kids" element={<ProductCategory />} />
               <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="cart" element={<CartPage />} />
            <Route path="login" element={<LoginPage />} />
         </Route>

         {/* <Route path="admin" element={<AuthLayoutAdmin />}>
            <Route path="order" element={<AdminPage />} />
            <Route path="product" element={<AdminPage />} />
            <Route path="customer" element={<AdminPage />} />
         </Route> */}
         {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
   );
}

export default Router;
