import React from "react";
import { useSelector } from "react-redux";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import { LogoutBtn } from "../index";

function Header() {
  const authStatus = useSelector((state) => state.auth.authStatus);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "About",
      slug: "/about",
      active: !authStatus,
    },
    {
      name: "Contact",
      slug: "/contact",
      active: !authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Community",
      slug: "/community",
    },
    {
      name: "Sustainable Living",
      slug: "/sustainable",
      active: authStatus,
    },
    {
      name: "Tasks",
      slug: "/tasks",
      active: authStatus,
    },
    {
      name: "LeaderBoard",
      slug: "/leaderboard",
      active: authStatus,
    },
  ];

  return (
    <header className="flex w-full justify-between text-lg h-[70px] bg-yellow-400 items-center p-2 px-6">
      <Logo />
      <div className="flex gap-3">
        {navItems?.map(
          (item, index) =>
            item.active && (
              <NavLink
                to={`${item.slug}`}
                key={index}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red-600" : "text-white"
                  } text-lg font-semibold`
                }
              >
                {item.name}
              </NavLink>
            )
        )}
        {/* header will be optimized more based on options. Later, we may add
        menubar for other options */}
        {authStatus && <LogoutBtn />}
      </div>
    </header>
  );
}

export default Header;
