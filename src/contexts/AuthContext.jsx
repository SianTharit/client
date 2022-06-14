import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import {
   getAccessToken,
   removeAccessToken,
   setAccessToken,
} from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
   const [user, setUser] = useState("");
   const navigate = useNavigate();

   // get TOKEN from localStorage
   useEffect(() => {
      const fetchUser = async () => {
         try {
            const token = getAccessToken();
            if (token) {
               const resMe = await axios.get("/users/me");
               console.log(resMe.data.user);
               setUser(resMe.data.user);
            }
         } catch (err) {
            removeAccessToken();
            navigate("/");
         }
      };
      fetchUser();
   }, []);

   // login
   const login = async (username, password) => {
      try {
         const res = await axios.post("/auth/login", { username, password });
         setAccessToken(res.data.token);
         const resMe = await axios.get("/users/me");
         console.log(user);
         setUser(resMe.data.user);
         console.log(user);
         return res.data.token;
      } catch (err) {
         console.log(err);
      }
   };

   // signup
   const signUp = async (username, email, password, confirmPassword) => {
      try {
         const res = await axios.post("/auth/signup", {
            username,
            email,
            password,
            confirmPassword,
         });
         setAccessToken(res.data.token);
         const resMe = await axios.get("/users/me");
         setUser(resMe.data.user);
      } catch (err) {
         console.log(err);
      }
   };

   // logout
   const logout = () => {
      removeAccessToken();
      setUser(null);
   };

   const loginAdmin = async (username, password) => {
      try {
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <AuthContext.Provider value={{ login, signUp, logout, user }}>
         {children}
      </AuthContext.Provider>
   );
}

const useAuth = () => {
   const ctx = useContext(AuthContext);
   return ctx;
};

// Provider
export default AuthContextProvider;

// For useContext : Consumer
export { useAuth };
