import { business } from "../../utils/constants.js";
import "./Contact.css";
function Contact() {
  return (
    <section
      id="contact"
      className="contact section"
      aria-labelledby="contact-title"
    >
      <div className="contact__inner container">
        <div>
          <p className="eyebrow">LET’S MAKE YOUR DAY A LITTLE SWEETER</p>
          <h2 id="contact-title">
            Got a craving?
            <br />
            Give us a call.
          </h2>
          <p>
            Questions about the menu or today’s flavors?
            <br />
            We’d love to hear from you.
          </p>
        </div>
        <div className="contact__links">
          <a className="contact__phone" href={business.phoneHref}>
            {business.phone}
            <span aria-hidden="true">↗</span>
          </a>
          <a className="contact__email" href={`mailto:${business.email}`}>
            {business.email}
            <span aria-hidden="true">↗</span>
          </a>
          {business.facebookUrl ? (
            <a
              className="contact__social"
              href={business.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find us on Facebook ↗
            </a>
          ) : (
            <p className="contact__social">
              Facebook <span>Page link coming soon</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
export default Contact;
