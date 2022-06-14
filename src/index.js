import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import UserContextProvider from "./contexts/UserContext";
import ProductContextProvider from "./contexts/ProductContext";
import CartContextProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <AuthContextProvider>
            <UserContextProvider>
               <ProductContextProvider>
                  <CartContextProvider>
                     <App />
                  </CartContextProvider>
               </ProductContextProvider>
            </UserContextProvider>
         </AuthContextProvider>
      </BrowserRouter>
   </React.StrictMode>
);
