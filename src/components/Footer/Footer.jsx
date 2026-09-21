import { business, navLinks } from "../../utils/constants.js";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a className="footer__brand" href="#home">
            the grind<span>.</span>
            <small>INTERNET SHOP</small>
          </a>
          <p>
            A little break. A lot of flavor.
            <br />
            Chaparral, New Mexico.
          </p>
          <nav aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
