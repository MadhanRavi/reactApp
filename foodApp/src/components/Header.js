import { LOGO_URL } from "../utils/consts";
// import { useState } from "react";

const Header = () => {
  // const [logBtnName, setLogBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-wrapper">
        <img className="logo" src={LOGO_URL} alt="Foodies" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/home">Cart</a>
          </li>
          {/* <button
            className="logBtn"
            onClick={() =>
              logBtnName === "Login"
                ? setLogBtnName("Logout")
                : setLogBtnName("Login")
            }>
            {logBtnName}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
