import axios from "../config/axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
   const [products, setProducts] = useState([]);
   const [productById, setProductById] = useState([]);
   const [image, setImage] = useState([]);
   const [productName, setProductName] = useState("");
   const [productPrice, setProductPrice] = useState("");
   const [productDescription, setDescription] = useState("");
   const [productDiscount, setProductDiscount] = useState("");
   const [productAmount, setProductAmount] = useState("");
   const [productSize, setProductSize] = useState("");
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const fetchProducts = async () => {
      try {
         const res = await axios.get("/products");
         setProducts(res.data.product);
         console.log(res.data.product);
      } catch (err) {
         console.log(err);
      }
   };
   useEffect(() => {
      fetchProducts();
   }, []);

   console.log(image);

   const handleClickAdd = async (e) => {
      try {
         e.preventDefault();
         setLoading(true);
         const formData = new FormData();
         for (let img of image) {
            formData.append("images", img);
            console.log(img);
            console.log(image);
         }
         formData.append("name", productName);
         formData.append("price", productPrice);
         formData.append("description", productDescription);
         formData.append("discount", productDiscount);
         formData.append("amount", productAmount);
         formData.append("size", productSize);
         const res = await axios.post("/products/create", formData);
         setImage(null);
         fetchProducts();
         navigate("/");
         console.log(res);
      } catch (err) {
         console.log(err);
      } finally {
         setLoading(false);
      }
   };

   const handleClickDelete = async (id) => {
      try {
         setLoading(true);
         await axios.delete("/products/" + id);
         fetchProducts();
      } catch (err) {
         console.log(err);
      } finally {
         setLoading(false);
      }
   };

   return (
      <ProductContext.Provider
         value={{
            products,
            setProductById,
            productById,
            handleClickAdd,
            image,
            setImage,
            setProductAmount,
            setDescription,
            setProductDiscount,
            setProductName,
            setProductSize,
            setProductPrice,
            handleClickDelete,
            loading,
         }}
      >
         {children}
      </ProductContext.Provider>
   );
}

export default ProductContextProvider;

function useProduct() {
   const ctx = useContext(ProductContext);
   return ctx;
}

export { useProduct };
