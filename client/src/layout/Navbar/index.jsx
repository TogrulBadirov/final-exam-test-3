import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
import { WishlistContext } from '../../context/WishlistContext';
const Navbar = () => {
    const { wishlist, addToWishlist } = useContext(WishlistContext);
  return (
    <nav>
    <div id="desktop-nav">
    <Link to="/">Home</Link>
    <Link to="/add-page">Add Page</Link>
    <Link to="/wishlist">Wishlist{wishlist.length > 0 ? "(" + wishlist.length +")" : ''}</Link>
    </div>
    {/* <div id="mobile-nav">
    <Link to="/">Home</Link>
    <Link to="/add-page">Add Page</Link>
    <Link to="/wishlist">Wishlist</Link>
    </div> */}
    </nav>
  )
}

export default Navbar