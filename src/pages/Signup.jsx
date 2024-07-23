// src/components/Signup.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faCity,
  faMapMarkerAlt,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";
import Input from "../components/Input";
import Select from "../components/Select";  


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

  const stateOptions = [
    { value: "DL", label: "Delhi" },
    { value: "RJ", label: "Rajasthan" },
    { value: "MH", label: "Maharashtra" },
    { value: "GJ", label: "Gujurat" }
  ];

  const countryOptions = [
    { value: "IN", label: "India" },
    { value: "US", label: "USA" },
  ];

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
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
          <Input
            id="fullName"
            type="text"
            placeholder="Full Name"
            icon={faUser}
            {...register("fullName", { required: "Full name is required" })}
            errors={errors.fullName}
          />
          <div className="grid grid-cols-2 gap-4 mb-2">
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              icon={faEnvelope}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              errors={errors.email}
            />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              icon={faLock}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters",
                },
              })}
              errors={errors.password}
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-2">
            <Input
              id="city"
              type="text"
              placeholder="City"
              icon={faCity}
              {...register("city", { required: "City is required" })}
              errors={errors.city}
            />
            <Select
              id="state"
              placeholder="State"
              icon={faMapMarkerAlt}
              options={stateOptions}
              {...register("state", { required: "State is required" })}
              errors={errors.state}
            />
            <Input
              id="zip"
              type="text"
              placeholder="Zip Code"
              icon={faMapPin}
              {...register("zip", { required: "Zip code is required" })}
              errors={errors.zip}
            />
            <Select
              id="country"
              placeholder="Country"
              icon={faMapMarkerAlt}
              options={countryOptions}
              {...register("country", { required: "Country is required" })}
              errors={errors.country}
            />
            <Input
              id="bio"
              type="text"
              placeholder="Bio"
              icon={faUser}
              {...register("bio", { required: "Bio is required" })}
              errors={errors.bio}
            />
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
