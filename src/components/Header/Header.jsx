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
      name: "Tasks",
      slug: "/tasks",
      active: authStatus,
    },
    {
      name: "Scanner",
      slug: "/scanner",
      active: authStatus,
    },
  ];

  // Inline styles for the anchor tag
  const recommendationLinkStyle = {
    textDecoration: 'none',
    color: 'white', // Color for the recommendation link
    margin: '2px',
     // Rounded corners
    backgroundColor: 'rgba(40, 167, 69, 0.1)', // Background color with transparency
    transition: 'color 0.4s ease',
  };

  // Hover effect styles for the anchor tag
  const recommendationLinkHoverStyle = {
   
    color: 'green', // Text color on hover
  };

  return (
    <header className="navbar">
      <div className="container">
        <Logo />
        <div className="nav-items">
          {navItems?.map(
            (item, index) =>
              item.active && (
                <NavLink
                  to={item.slug}
                  key={index}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              )
          )}
          {authStatus && (
            <a
              href="http://127.0.0.1:5000/recommend?user_id=1"
              target="_blank"
              rel="noopener noreferrer"
              style={recommendationLinkStyle}
              onMouseOver={(e) => Object.assign(e.target.style, recommendationLinkHoverStyle)}
              onMouseOut={(e) => Object.assign(e.target.style, recommendationLinkStyle)}
            >
              Resource Recommendation
            </a>
          )}
          {authStatus && <LogoutBtn />}
        </div>
      </div>
    </header>
  );
}

export default Header;
