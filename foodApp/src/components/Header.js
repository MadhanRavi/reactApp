import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/consts";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [logBtnName, setLogBtnName] = useState("Login");
  const { loggedUser } = useContext(UserContext);
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
          <li className="px-4">
            <p>{loggedUser}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
