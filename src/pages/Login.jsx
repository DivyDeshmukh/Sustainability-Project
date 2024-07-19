// import React from "react";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import axios from "axios";
// import "/login.css";

// function Login() {
//   const handleSignUpClick = () => {
//     // Simulate navigation to the Signup component
//     window.location.href = "/signup"; // Redirects to the Signup page
//   };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [submitting, setSubmitting] = useState(false);
//   const [formError, setFormError] = useState(null);

//   const onSubmit = async (data) => {
//     setSubmitting(true);
//     try {
//       const response = await axios.post("YOUR_API_ENDPOINT", data);
//       console.log(response.data);
//     } catch (error) {
//       setFormError("Invalid credentials. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <div className="loginForm m-2 py-6 flex flex-col justify-center sm:py-12">
//         <div className="loginForm m-2 py-6 flex flex-col justify-center sm:py-12">
//           <div className="login absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-xl w-40 mx-auto "></div>
//           <div className="login relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16 w-40 ">
//             <div className="mx-auto max-w-md">
//               <h1 className="text-center text-2xl font-bold mb-4">Login</h1>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="email"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^\S+@\S+$/i,
//                         message: "Invalid email address",
//                       },
//                     })}
//                     type="email"
//                     id="email"
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-xs italic">
//                       {errors.email.message}
//                     </p>
//                   )}
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="password"
//                   >
//                     Password
//                   </label>
//                   <input
//                     {...register("password", {
//                       required: "Password is required",
//                     })}
//                     type="password"
//                     id="password"
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                   {errors.password && (
//                     <p className="text-red-500 text-xs italic">
//                       {errors.password.message}
//                     </p>
//                   )}
//                 </div>
//                 {formError && (
//                   <p className="text-red-500 text-xs italic">{formError}</p>
//                 )}
//                 <div className="flex items-center">
//                   <button
//                     type="submit"
//                     className="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                   >
//                     {submitting ? "Logging in..." : "Login"}
//                   </button>

//                   <br />
//                 </div>
//                 <br />
//                 <p
//                   style={{ cursor: "pointer", textAlign: "center" }}
//                   onClick={handleSignUpClick}
//                 >
//                   Click here if not registered
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import "/login.css";
import Input from "../components/Input";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";
import appwriteService from "../appwrite/config";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = async (data) => {
    console.log(data);
    setSubmitting(true);
    try {
      const session = await authService.login({ ...data });
      if (session) {
        console.log(session);
        const id = await authService.getCurrentUser();
        console.log("gotUser");
        const currentUser = await appwriteService.getUserDetailsById(id.$id);
        console.log("gotUserDetailsById");
        dispatch(login({ ...currentUser }));
        console.log("dispatched");
        navigate("/");
        console.log("navigating");
      }
    } catch (error) {
      setFormError("Invalid credentials. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="loginForm m-1 py-0 flex flex-col justify-center sm:py-12">
      <div className="login w-full relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="login absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="login relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-bold">
                &nbsp;Log On to Climate Program!
              </h1>
            </div>

            <form onSubmit={handleSubmit(loginUser)}>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Email address"
                      {...register("email", {
                        required: "Email is Required",
                      })}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      className="block mx-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      fdprocessedid="5oucw"
                    >
                      {submitting ? "Logging in..." : "Login"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
              Do not have an account? &nbsp;
              <Link to="/signup" className="register-hover">
                Register here!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
