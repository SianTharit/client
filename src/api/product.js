import axios from "../config/axios";

export const ProductSales = () => axios.get("/products/sale");
