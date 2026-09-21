import Navigation from "../Navigation/Navigation.jsx";
import { business } from "../../utils/constants.js";
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
          <span className="header__wordmark">
            the grind<span>.</span>
          </span>
          <span className="header__subtitle">
            INTERNET SHOP · COFFEE & TREATS
          </span>
        </a>
        <Navigation />
      </div>
    </header>
  );
}
export default Header;
