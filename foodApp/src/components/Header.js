import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/consts";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [logBtnName, setLogBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 items-center shadow-lg mb-4">
      <div className="w-[150px]">
        <img className="logo" src={LOGO_URL} alt="Foodies" />
      </div>
      <div className="nav-items">
        <ul className="flex p-5 m-5 items-center">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
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
