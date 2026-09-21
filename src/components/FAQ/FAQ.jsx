import { faqs } from "../../utils/constants.js";
import "./FAQ.css";
function FAQ() {
  return (
    <section id="faq" className="faq section" aria-labelledby="faq-title">
      <div className="faq__inner container">
        <div className="section__heading">
          <p className="eyebrow">A FEW THINGS TO KNOW</p>
          <h2 id="faq-title">Glad you asked.</h2>
          <p>A little help choosing your next treat.</p>
        </div>
        <div className="faq__list">
          {faqs.map((faq) => (
            <details className="faq__item" key={faq.question}>
              <summary>
                {faq.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FAQ;
