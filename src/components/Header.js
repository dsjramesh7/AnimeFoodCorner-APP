import { Link } from "react-router-dom";
import minato from "../../public/minato.png";
import StatusOnlineComponent from "./StatusOnlineComponent";
const Header = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={minato} className="logo" />
        <span className="logo-name">AnimeFoodCorner</span>
      </div>
      <StatusOnlineComponent />
      <ul className="menus">
        <li className="menu-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="menu-item">
          <Link to={"/grocery"}>Grocery</Link>
        </li>
        <li className="menu-item">
          <Link to={"/about"}>About Us</Link>
        </li>
        <li className="menu-item">
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li className="menu-item">Cart</li>
      </ul>
    </div>
  );
};
export default Header;
