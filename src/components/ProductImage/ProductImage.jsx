import { photos } from "../../utils/constants.js";
import "./ProductImage.css";

function ProductImage({ product, eager = false }) {
  const photo = photos[product];
  return (
    <div className={`product-image product-image--${product}`}>
      <img
        src={photo.source}
        alt={photo.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        width="1582"
        height="2048"
      />
    </div>
  );
}
export default ProductImage;
