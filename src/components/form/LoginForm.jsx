import { LockClosedIcon, UserIcon } from "@heroicons/react/outline";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Form } from "../form/Form";
import InputYup from "../form/InputYup";
import SubmitButton from "../form/SubmitButton";
import * as yup from "yup";

import logo from "../../assets/images/logo.png";
function LoginForm({ setType }) {
   const navigate = useNavigate();
   const { login } = useAuth();
   // const { setError } = useError();

   let schema = yup.object().shape({
      name: yup.string().required(),
      password: yup
         .string()
         .required()
         .test({
            test: (value) => value.length >= 6,
            message: "Password must be at least 6 characters",
         }),
   });
   const handleSubmitLogin = async ({ name, password }) => {
      try {
         const result = await login(name, password);
         if (result) {
            navigate("/");
         }
      } catch (err) {
         console.log(err);
         // setError(err);
      }
   };

   // const [username, setUsername] = useState("");
   // const [password, setPassword] = useState("");
   return (
      <div className="flex h-screen max-w-sm mx-auto">
         <div className="greenColor rounded-2xl m-auto items-center flex flex-col p-6">
            <div className="w-96 mx-auto text-center space-y-4">
               <img src={logo} alt="logo" className="mx-auto w-28" />
               <h1 className=" text-white font-extrabold">Welcome to Nike</h1>
               <p className=" text-gray-light-dash">Sign in to continue</p>
               <Form
                  schema={schema}
                  className="flex flex-col"
                  onSubmit={handleSubmitLogin}
               >
                  <InputYup
                     name="name"
                     type="type"
                     placeholder="Username"
                     rounded="md"
                     icon={<UserIcon />}
                  />
                  <InputYup
                     name="password"
                     type="password"
                     placeholder="password"
                     rounded="md"
                     icon={<LockClosedIcon />}
                  />
                  <SubmitButton className="orgColor font-bold rounded-md p-2 shadow-md text-white hover:translate-y-1 duration-75 mb-2">
                     Sign In
                  </SubmitButton>
                  <div className="flex justify-between items-center">
                     <hr className="hr" />
                     <p className=" mr-3 ml-3 text-gray-light-dash">OR</p>
                     <hr className="hr" />
                  </div>
                  <div className="flex items-center justify-center mb-2 ">
                     <p className="text-gray-light-dash">
                        Don't have a account?
                     </p>
                     <p
                        className="text-org-main font-bold cursor-pointer pop-up"
                        onClick={() => setType("register")}
                     >
                        Register
                     </p>
                  </div>
               </Form>
            </div>
         </div>
      </div>
   );
}
export default LoginForm;
