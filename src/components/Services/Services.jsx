import { services } from "../../utils/constants.js";
import arrow from "../../assets/icons/arrow-up-right.svg";
import "./Services.css";
function Services() {
  return (
    <section
      id="services"
      className="services section"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="section__heading">
          <p className="eyebrow">HOWEVER YOU DO YOUR BREAK</p>
          <h2 id="services-title">There’s a flavor for that.</h2>
        </div>
        <div className="services__grid">
          {services.map((service) => (
            <article key={service.title} className="services__item">
              <span className="services__number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link}>
                {service.label}
                <img src={arrow} alt="" width="22" height="22" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
