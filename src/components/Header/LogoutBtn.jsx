import React from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout as logoutUser } from "../../features/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    authService.logout().then(() => {
      // update store
      dispatch(logoutUser());
      navigate("/");
    });
  };

  return (
    <button className="text-white" onClick={logout}>
      Logout
    </button>
  );
}

export default LogoutBtn;
