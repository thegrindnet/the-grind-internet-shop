import { useEffect, useRef, useState } from "react";
import { navLinks, business } from "../../utils/constants.js";
import "./Navigation.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const navRef = useRef(null);
  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOutside = (event) => {
      if (!navRef.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [isOpen]);
  return (
    <nav
      className="navigation"
      aria-label="Main navigation"
      ref={navRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setIsOpen(false);
      }}
    >
      <button
        ref={toggleRef}
        className="navigation__toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="navigation-links"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}{" "}
        <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
      </button>
      <div
        id="navigation-links"
        className={`navigation__links${isOpen ? " navigation__links--open" : ""}`}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="button navigation__call" href={business.phoneHref}>
          Call the shop <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
}
export default Navigation;
