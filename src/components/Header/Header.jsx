import React from "react";
import { useSelector } from "react-redux";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import { LogoutBtn } from "../index";
import "/src/App.css";

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
    <header className="navbar">
      <div className="container">
        <Logo />
        <div className="nav-items">
          {navItems?.map(
            (item, index) =>
              item.active && (
                <NavLink
                  to={`${item.slug}`}
                  key={index}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              )
          )}
          {authStatus && <LogoutBtn />}
        </div>
      </div>
    </header>
  );
}

export default Header;
