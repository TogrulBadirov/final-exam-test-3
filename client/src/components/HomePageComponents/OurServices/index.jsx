import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import SectionHeader from "../SectionHeader";
import axios from "axios";
import Service from "../../Service";
import { WishlistContext } from "../../../context/WishlistContext";
const OurServices = () => {
  const [services, setServices] = useState();
  const { wishlist, addToWishlist } = useContext(WishlistContext);
  const getAllServices = async () => {
    const resp = await axios("http://localhost:3000/");
    setServices(resp.data);
  };
  useEffect(() => {
    getAllServices();
  }, []);
  return (
    <section id="our-services">
      <div className="container">
        <SectionHeader title={"Our Services"} />
        <div className="row">
          {services && services.map((product) => <Service key={product._id} product={product} addToWishlist={addToWishlist} />)}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
