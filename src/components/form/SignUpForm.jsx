import logo from "../../assets/images/logo.png";
import { MailIcon, LockClosedIcon, UserIcon } from "@heroicons/react/outline";
import { Form } from "../form/Form";
import SubmitButton from "../form/SubmitButton";
import * as yup from "yup";
import InputYup from "./InputYup";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function SignUpForm({ setType }) {
   const { signUp } = useAuth();
   const navigate = useNavigate();

   let schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().required().email(),
      password: yup
         .string()
         .required()
         .test({
            test: (value) => value.length >= 6,
            message: "Password must be at least 6 characters",
         }),
      confirmPassword: yup
         .string()
         .required()
         .oneOf([yup.ref("password")], "Passwords must match"),
   });

   const handleSubmitSignup = async ({
      name,
      email,
      password,
      confirmPassword,
   }) => {
      try {
         // console.log(name, email, password, confirmPassword);
         await signUp(name, email, password, confirmPassword);
         navigate("/");
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <div className="flex h-screen max-w-sm mx-auto">
         <div className="colorGreen rounded-2xl m-auto items-center flex flex-col p-6">
            <div className="w-96 mx-auto text-center space-y-4">
               <img src={logo} alt="logo" className="mx-auto w-28" />
               <h1 className=" text-white font-extrabold">Welcome to Nike</h1>
               <p className=" text-gray-light-dash">Sign up to continue</p>
               <Form
                  schema={schema}
                  className="flex flex-col space-y-1"
                  onSubmit={handleSubmitSignup}
               >
                  <InputYup
                     name="name"
                     type="type"
                     placeholder="Username"
                     rounded="md"
                     icon={<UserIcon />}
                  />
                  <InputYup
                     name="email"
                     type="email"
                     placeholder="Email"
                     rounded="md"
                     icon={<MailIcon />}
                  />
                  <InputYup
                     name="password"
                     type="password"
                     placeholder="password"
                     rounded="md"
                     icon={<LockClosedIcon />}
                  />
                  <InputYup
                     name="confirmPassword"
                     type="password"
                     placeholder="confirm password"
                     rounded="md"
                     icon={<LockClosedIcon />}
                  />
                  <SubmitButton className="orgColor font-bold rounded-md p-2 shadow-md text-white hover:translate-y-1 duration-75 mb-2">
                     Sign Up
                  </SubmitButton>
                  <div className="flex justify-between items-center">
                     <hr className="hr" />
                     <p className=" mr-3 ml-3 text-gray-light-dash">OR</p>
                     <hr className="hr" />
                  </div>
                  <div className="flex items-center justify-center">
                     <p className="text-gray-light-dash">Have an account?</p>
                     <p
                        className="text-org-main font-bold cursor-pointer pop-up"
                        onClick={() => setType("login")}
                     >
                        Sign In
                     </p>
                  </div>
               </Form>
               {/* <form
                  className="flex flex-col space-y-4"
                  onSubmit={handleSubmitSignup}
               >
                  <Input
                     placeholder="Username"
                     icon={<UserIcon />}
                     rounded="md"
                     value={user}
                     onChange={(e) => setUser(e.target.value)}
                  />
                  <Input
                     placeholder="Email"
                     icon={<MailIcon />}
                     rounded="md"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                     placeholder="password"
                     icon={<LockClosedIcon />}
                     rounded="md"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                     placeholder="Confirm password"
                     icon={<LockClosedIcon />}
                     rounded="md"
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button title="Sign Up" />
                  <div className="flex justify-between items-center">
                     <hr className="hr" />
                     <p className=" mr-3 ml-3 text-gray-light-dash">OR</p>
                     <hr className="hr" />
                  </div>
                  <div className="flex items-center justify-center">
                     <p className="text-gray-light-dash">Have an account?</p>
                     <p
                        className="text-org-main font-bold cursor-pointer pop-up"
                        onClick={() => setType("login")}
                     >
                        Sign In
                     </p>
                  </div>
               </form> */}
            </div>
         </div>
      </div>
   );
}
export default SignUpForm;
