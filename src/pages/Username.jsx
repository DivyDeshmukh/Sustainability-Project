import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import appwriteService from "../appwrite/config";
import { useSelector, useDispatch } from "react-redux";
import config from "../config/config";
import { useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";
import Logo from "../components/Logo";

function Username() {
  const { register, handleSubmit } = useForm();
  const [valid, setValid] = useState(true);
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = async (data) => {
    console.log("userData: ", userData);
    try {
      const username = await appwriteService.checkUsernameAvaialable(
        data.username
      );

      if (username.length === 0) {
        setValid(true);
        const userProfile = await appwriteService.userProfile({
          userId: userData.$id,
          username: data.username,
          user_profile_id: config.appwrite_default_profile_Id,
          email: userData.email,
          fullName: userData.name,
          // getCurrentUser returning only limited data so user can add other data in edit profile section
          //   bio: userData.bio,
          //   city: userData.city,
          //   state: userData.state,
          //   country: userData.country,
        });

        if (userProfile) {
          dispatch(login({ ...userProfile }));
          navigate("/");
        }
      } else {
        setValid(false);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="bg-black p-4 h-screen w-full flex items-center justify-center">
      <div className="flex flex-col gap-4 bg-[#ED729F] dark:bg-red-500 px-12 py-8 rounded-2xl items-center">
        <Logo className="h-[60px] w-[60px] bg-white p-1 dark:bg-black" />

        {!valid && (
          <p className="text-center text-white dark:text-amber-300 font-bold">
            Username not available
          </p>
        )}

        <form
          onSubmit={handleSubmit(users)}
          className="flex flex-col gap-6 dark:text-red-500 font-bold"
        >
          <Input
            type="text"
            placeholder="Username"
            label="Username: "
            {...register("username", {
              required: true,
              validate: true,
            })}
            className="form-input mt-1 block w-full rounded-lg"
          />
          <Button
            type="submit"
            className="py-1.5 text-[#ED729F] bg-[white] border-4 dark:border-black dark:text-red-500 dark:bg-black rounded-full dark:hover:bg-red-500 dark:hover:text-black hover:border-4 dark:hover:border-black hover:bg-[#ED729F] hover:border-white hover:text-white"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Username;

// No, the get method in Appwrite does not provide the password in the data object of the currently logged-in user. In fact, Appwrite does not expose the password of the user through its API endpoints for security reasons.
