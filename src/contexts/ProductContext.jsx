import { createContext, useContext, useEffect } from "react";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
   useEffect(() => {
      const fetchPost = async () => {
         try {
         } catch (err) {
            console.log(err);
         }
      };
      fetchPost();
   }, []);

   return (
      <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
   );
}

export default ProductContextProvider;

function useProduct() {
   const ctx = useContext(ProductContext);
   return ctx;
}

export { useProduct };
