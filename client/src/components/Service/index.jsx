import { useContext } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
const Service = ({ product, addToWishlist }) => {
  const { addToBasket } = useContext(BasketContext);
  return (
    <div className="card service">
      <div className="icon">
        <i className={product.image}></i>
        {/* <i class="fa-solid fa-rocket"></i> */}
      </div>
      <div className="title">
        <h4>{product.title}</h4>
      </div>
      <div className="detail">
        {product.detail}
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci expedita voluptatibus modi? Beatae, itaque. */}
      </div>
      <div className="learn-more">
        <Link to={`/detail-page/${product._id}`}>Learn More</Link>
      </div>
      <button onClick={() => addToWishlist(product)}>add to wishlist</button>
      <button onClick={() => addToBasket(product)}>add to basket</button>
    </div>
  );
};

export default Service;
