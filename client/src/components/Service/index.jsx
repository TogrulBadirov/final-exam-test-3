import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
const Service = ({product,addToWishlist}) => {
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
        <button onClick={()=>addToWishlist(product)}>add to wishlist</button>
    </div>
  )
}

export default Service