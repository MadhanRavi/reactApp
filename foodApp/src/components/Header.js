import { LOGO_URL } from "../utils/consts";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
