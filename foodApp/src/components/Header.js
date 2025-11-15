import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/consts";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [logBtnName, setLogBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-wrapper">
        <img className="logo" src={LOGO_URL} alt="Foodies" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/home">Cart</Link>
          </li>
          <button
            className="logBtn"
            onClick={() =>
              logBtnName === "Login"
                ? setLogBtnName("Logout")
                : setLogBtnName("Login")
            }>
            {logBtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
