import { galleryItems } from "../../utils/constants.js";
import ProductImage from "../ProductImage/ProductImage.jsx";
import "./Gallery.css";

function Gallery() {
  return (
    <section
      id="menu"
      className="gallery section container"
      aria-labelledby="gallery-title"
    >
      <div className="gallery__heading">
        <div className="section__heading">
          <p className="eyebrow">A LITTLE INSPIRATION</p>
          <h2 id="gallery-title">What are you craving?</h2>
          <p>
            Sweet, refreshing, or a little of both. Start with something
            delicious.
          </p>
        </div>
        <a className="text-link" href="#full-menu">
          See the full menu <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="gallery__grid">
        {galleryItems.map((item) => (
          <article className="gallery__card" key={item.name}>
            <div className={`gallery__photo gallery__photo--${item.image}`}>
              <ProductImage product={item.image} />
            </div>
            <div className="gallery__body">
              <p className="gallery__category">{item.category}</p>
              <h3>{item.name}</h3>
              <p className="gallery__description">{item.description}</p>
              <p className="gallery__price">
                {item.price} <span>/ {item.size}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className="gallery__footnote">
        More sizes. More flavors. More reasons to stop by. Browse the complete
        menu below.
      </p>
    </section>
  );
}
export default Gallery;
