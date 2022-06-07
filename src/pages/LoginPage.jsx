import Header from "../components/layout/header/Header";
import LoginForm from "../components/form/LoginForm";
import SignUpForm from "../components/form/SignUpForm";
import { useState } from "react";

function LoginPage() {
   // Login Section
   // const { login, signUp } = useContext(AuthContext);

   const [type, setType] = useState("login");

   return (
      <>
         {/* SIgn In */}
         {type === "login" && <LoginForm setType={setType} />}

         {/* Sign Up */}
         {type === "register" && <SignUpForm setType={setType} />}
      </>
   );
}

export default LoginPage;
