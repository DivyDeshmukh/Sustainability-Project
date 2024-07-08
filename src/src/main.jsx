import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Analytics,
  Bookmarks,
  Community,
  Contact,
  Donation,
  Events,
  LandingPage,
  Leaderboard,
  Login,
  ProtectedRoute,
  Signup,
  Sustainability,
  Tasks,
  Profile,
  Eventdetails,
  EditProfile
} from "./components/index.js";
import { Provider } from "react-redux";
import store from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />, // home page
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/community",
        element: (
          // <ProtectedRoute>
            <Community />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/donation",
        element: (
          <ProtectedRoute>
            <Donation />
          </ProtectedRoute>
        ),
      },
      {
        path: "/events",
        element: (
          // <ProtectedRoute>
            <Events />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/tasks",
        element: (
          // <ProtectedRoute>
            <Tasks />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/analytics",
        element: (
          <ProtectedRoute>
            <Tasks />
          </ProtectedRoute>
        ),
      },
      {
        path: "/bookmarks",
        element: (
          <ProtectedRoute>
            <Bookmarks />
          </ProtectedRoute>
        ),
      },
      {
        path: "/leaderboard",
        element: (
          <ProtectedRoute>
            <Leaderboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/sustainability",
        element: (
          <ProtectedRoute>
            <Sustainability />
          </ProtectedRoute>
        ),
      },
      {
        path:'/profile',
        element: (
          // <ProtectedRoute>
            <Profile />
          // </ProtectedRoute>
        )
      },
      {
        path:'/eventdetails',
        element:(
          <Eventdetails />
        )
      },
      {
        path:'/editprofile',
        element:(
          <EditProfile />
        )
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
