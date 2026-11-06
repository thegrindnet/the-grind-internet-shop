import Navigation from "../Navigation/Navigation.jsx";
import { business } from "../../utils/constants.js";
import logo from "../../assets/images/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__strip">
        <span>A little treat. Right here in Chaparral.</span>
        <a href={business.phoneHref}>{business.phone}</a>
      </div>
      <div className="header__main container">
        <a
          className="header__brand"
          href="#home"
          aria-label="The Grind Internet Shop, home"
        >
          <img
            src={logo}
            className="header__logo"
            alt="The grind internet shop logo"
          />
          <div className="header__logo-block">
            <span className="header__wordmark">THE GRIND INTERNET SHOP</span>
            <span className="header__subtitle">
              COFFEE & TREATS <span>.</span> PRINTS <span>.</span> MARKETING
            </span>
          </div>
        </a>
        <Navigation />
      </div>
    </header>
  );
}
export default Header;
