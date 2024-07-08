import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const authStatus = useSelector((state) => state.auth.authStatus);
  const navigate = useNavigate();

  // Protected Routes

  useEffect(() => {
    if (!authStatus) {
      // if user is not logged in and that page is secure i.i needs authentication then first navigate user to login page.
      navigate("/login");
    }
  }, []);
  return <div>{children}</div>;
}

export default ProtectedRoute;
