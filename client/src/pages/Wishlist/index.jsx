import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../context/WishlistContext";
import Service from "../../components/Service";
import SectionHeader from "../../components/HomePageComponents/SectionHeader";
import "./index.scss"
const Wishlist = () => {
  const { wishlist, addToWishlist } = useContext(WishlistContext);

  return (
    <section id="wishlist">
      <Helmet>
        <title>Wishlist</title>
      </Helmet>

      <div className="container">
        <SectionHeader title={"Wishlist"} />
        <div className="row">
          {wishlist &&
            wishlist.map((product) => (
              <Service
                key={product._id}
                product={product}
                addToWishlist={addToWishlist}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
