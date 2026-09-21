import { reviews } from "../../utils/constants.js";
import "./Testimonials.css";
function Testimonials() {
  return (
    <section
      id="reviews"
      className="testimonials section container"
      aria-labelledby="reviews-title"
    >
      <div className="section__heading">
        <p className="eyebrow">KIND WORDS FROM OUR COMMUNITY</p>
        <h2 id="reviews-title">Good treats. Happy people.</h2>
      </div>
      <div className="testimonials__grid">
        {reviews.map((review) => (
          <figure className="testimonials__card" key={review.name}>
            <span className="testimonials__mark" aria-hidden="true">
              “
            </span>
            <blockquote>{review.quote}</blockquote>
            <figcaption>
              <strong>{review.name}</strong>
              <a href={review.url} target="_blank" rel="noopener noreferrer">
                Google reviewer <span aria-hidden="true">↗</span>
              </a>
              {review.translated && (
                <span className="testimonials__translation">
                  Translated from Spanish
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
export default Testimonials;
