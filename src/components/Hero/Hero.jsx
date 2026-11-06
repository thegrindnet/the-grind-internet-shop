import ProductImage from "../ProductImage/ProductImage.jsx";
import "./Hero.css";
import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="eyebrow">YOUR NEIGHBORHOOD TREAT STOP</p>
          <h1 id="hero-title">
            A little break.
            <br />
            <span>
              A lot of <br />
              flavor.
            </span>
          </h1>
          <p className="hero__description">
            Strawberries and Cream. Coffee in your cup. Something sweet in your
            day. Find your next favorite at The Grind in Chaparral.
          </p>
          <div className="hero__actions">
            <a className="button" href="#menu">
              Find your favorite treat
            </a>
          </div>
          <p className="hero__location">
            <a href="#visit">
              309 Red Sun Dr. #2 • Chaparral, New Mexico 88081
            </a>
          </p>
        </div>
        <div className="hero__visual">
          {/* <span className="hero__circle" aria-hidden="true" /> */}
          <img className="hero__image" src={heroImage} />
          {/* <div className="hero__back-product">
            <ProductImage product="frappe" eager />
          </div>
          <div className="hero__front-product">
            <ProductImage product="chamoyada" eager />
          </div>
          <span className="hero__note">
            Sweet. Tangy.
            <br />
            Totally your thing.
          </span>
          <div className="hero__label">
            <span>Meet your afternoon pick-me-up</span>
            <strong>
              Chamoyada <span>from $6.50</span>
            </strong>
          </div> */}
        </div>
      </div>
      <div
        className="hero__ribbon"
        aria-label="Coffee, sweet treats, fresh flavors, and savory bites"
      >
        <span>COFFEE BREAKS</span>
        <span aria-hidden="true">✳</span>
        <span>SWEET TREATS</span>
        <span aria-hidden="true">✳</span>
        <span>FRESH FLAVORS</span>
        <span aria-hidden="true">✳</span>
        <span>SAVORY BITES</span>
      </div>
    </section>
  );
}
export default Hero;
