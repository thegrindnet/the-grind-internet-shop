import { business, hours } from "../../utils/constants.js";
import "./Visit.css";
function Visit() {
  return (
    <section
      id="visit"
      className="visit section container"
      aria-labelledby="visit-title"
    >
      <div className="section__heading">
        <p className="eyebrow">YOUR NEXT TREAT IS CLOSER THAN YOU THINK</p>
        <h2 id="visit-title">Come on by.</h2>
      </div>
      <div className="visit__grid">
        <div className="visit__info">
          <h3>The Grind Internet Shop</h3>
          <address>
            {business.street}
            <br />
            {business.city}
          </address>
          <a
            href={business.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Get directions <span aria-hidden="true">↗</span>
          </a>
          <h3 className="visit__hours-title">Shop hours</h3>
          <p className="visit__timezone">
            Chaparral local time (Mountain Time)
          </p>
          <dl className="visit__hours">
            {hours.map(([day, time]) => (
              <div key={day}>
                <dt>{day}</dt>
                <dd>{time}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="visit__map">
          <iframe
            title="Map to The Grind Internet Shop at 309 Red Sun Drive, Chaparral, New Mexico"
            src={business.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a href={business.mapUrl} target="_blank" rel="noopener noreferrer">
            Open in Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Visit;
