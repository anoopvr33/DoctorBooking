import "./navbar.css";
// import { NavLink, UseNavigate } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="navbar">
      <NavLink className="link" to="/doctor/profile">
        profile
      </NavLink>
      <button onClick={logout}>Logout</button>
      {/* we can use pop out (antd pop) extra function
      like u want to logout option */}
    </div>
  );
};

export default Navbar;
