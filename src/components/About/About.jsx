import ProductImage from "../ProductImage/ProductImage.jsx";
import "./About.css";
function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="about__inner container">
        <div className="about__visual">
          <div className="about__photo">
            <ProductImage product="special" />
          </div>
          <span className="about__caption">
            A little something
            <br />
            <strong>to smile about.</strong>
          </span>
        </div>
        <div className="about__copy">
          <p className="eyebrow">HELLO, CHAPARRAL.</p>
          <h2 id="about-title">
            Your neighborhood.
            <br />
            Your favorite little stop.
          </h2>
          <p>
            At The Grind Internet Shop, a coffee break can turn into a Chamoyada
            kind of day. We bring together coffee shop favorites, ice cream
            treats, and Mexican-inspired specialties, right here in Chaparral,
            New Mexico.
          </p>
          <p>
            Stop by for a quick bite, bring a friend for something sweet, or
            discover a new favorite. There’s something for every craving—and
            always a reason for a little treat.
          </p>
          <a className="button button--outline" href="#visit">
            Make it a Grind day <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
