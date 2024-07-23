import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import authService from "../appwrite/auth";
import { login } from "../features/authSlice";
import appwriteService from "../appwrite/config";
import "/login.css";

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
                  {formError && (
                    <p className="text-red-500 text-xs italic">{formError}</p>
                  )}
                  <div className="relative">
                    <button
                      type="submit"
                      className="block mx-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
