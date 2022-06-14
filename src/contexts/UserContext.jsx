import { createContext, useContext, useEffect, useState } from "react";
import {
   getAccessToken,
   setAccessToken,
   removeAccessToken,
} from "../services/localStorage";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

function UserContextProvider({ children }) {
   const [user, setUser] = useState("");
   const navigate = useNavigate();

   // get TOKEN from localStorage
   useEffect(() => {
      const fetchUser = async () => {
         try {
            const token = getAccessToken();
            if (token) {
               const resMe = await axios.get("/users/me");
               setUser(resMe.data.user);
               // console.log(resMe.data);
            }
         } catch (err) {
            removeAccessToken();
            navigate("/");
         }
      };
      fetchUser();
   }, [navigate]);

   const EditUser = async (firstName, lastName, phoneNumber, address) => {
      try {
         const resEdit = await axios.put("/users/" + user.id, {
            firstName,
            lastName,
            phoneNumber,
            address,
         });
         setUser(resEdit.data.user);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <UserContext.Provider value={{ user, setUser, EditUser }}>
         {children}
      </UserContext.Provider>
   );
}

export default UserContextProvider;

function useUser() {
   const ctx = useContext(UserContext);
   return ctx;
}

export { useUser };
