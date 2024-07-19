import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faCity,
  faMapMarkerAlt,
  faMapPin,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setSubmitting(true);
    console.log(data);
    try {
      // Replace "YOUR_API_ENDPOINT" with your actual API endpoint
      const userAccount = await authService.createAccount({ ...data });
      console.log(userAccount);
      if (userAccount) {
        const currentUser = await authService.getCurrentUser();
        dispatch(login({ ...currentUser }));
        navigate("/username");
      }
    } catch (error) {
      setFormError("Failed to submit form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <style>
        {`
          body {
            background: linear-gradient(-45deg,#c8f564, #38761d, #d9ead3, #6aa84f);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
            height: 100vh;
          }

          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
        `}
      </style>
      <div className="max-w-2xl mx-auto mt-4 bg-gray-100 bg-opacity-60 p-4 rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-bold mb-4">Registration</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4"
        >
          <div className="mb-1">
            <label
              htmlFor="fullName"
              className=" text-gray-700 text-sm font-bold mb-2 flex items-center"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" /> Full Name
            </label>
            <input
              {...register("fullName", { required: "Full name is required" })}
              type="text"
              id="fullname"
              placeholder="Enter your Full Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs italic">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-2">
            <div>
              <label
                htmlFor="email"
                className="text-gray-700 text-sm font-bold mb-2 flex items-center"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email
                Address
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                id="email"
                placeholder="name@company.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className=" text-gray-700 text-sm font-bold mb-2 flex items-center"
              >
                <FontAwesomeIcon icon={faLock} className="mr-2" /> Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
                type="password"
                id="password"
                placeholder="Enter password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-2">
            <div>
              <label
                htmlFor="city"
                className=" text-gray-700 text-sm font-bold mb-2 flex items-center"
              >
                <FontAwesomeIcon icon={faCity} className="mr-2" /> City
              </label>
              <input
                {...register("city", { required: "City is required" })}
                type="text"
                id="city"
                placeholder="Enter City"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.city && (
                <p className="text-red-500 text-xs italic">
                  {errors.city.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="state"
                className=" text-gray-700 text-sm font-bold mb-2 flex items-center"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> State
              </label>
              <select
                {...register("state", { required: "State is required" })}
                id="state"
                placeholder="Choose"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">
                  Choose...
                  <FontAwesomeIcon icon={faCaretDown} className="mr-2" />
                </option>
                <option value="NY">New York</option>
                <option value="CA">California</option>
                {/* Add more options as needed */}
              </select>
              {errors.state && (
                <p className="text-red-500 text-xs italic">
                  {errors.state.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="zip"
                className=" text-gray-700 text-sm font-bold mb-2 flex items-center"
              >
                <FontAwesomeIcon icon={faMapPin} className="mr-2" /> Zip Code
              </label>
              <input
                {...register("zip", { required: "Zip code is required" })}
                type="text"
                id="zip"
                placeholder="Enter Zip"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.zip && (
                <p className="text-red-500 text-xs italic">
                  {errors.zip.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="country"
                className=" text-gray-700 text-sm font-bold mb-2 flex items-center"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />{" "}
                Country
              </label>
              <select
                {...register("country", { required: "Country is required" })}
                id="country"
                placeholder="Choose"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">
                  Choose...
                  <FontAwesomeIcon icon={faCaretDown} className="mr-2" />
                </option>
                <option value="IN">India</option>
                <option value="US">USA</option>
                {/* Add more options as needed */}
              </select>
              {errors.country && (
                <p className="text-red-500 text-xs italic">
                  {errors.country.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="bio"
                className=" text-gray-700 text-sm font-bold mb-2 flex items-center"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" /> Bio
              </label>
              <input
                {...register("bio", { required: "Bio is required" })}
                id="bio"
                placeholder="Add Bio"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />

              {errors.bio && (
                <p className="text-red-500 text-xs italic">
                  {errors.bio.message}
                </p>
              )}
            </div>
          </div>

          {formError && (
            <p className="text-red-500 text-xs italic">{formError}</p>
          )}

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {submitting ? "Submitting..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
