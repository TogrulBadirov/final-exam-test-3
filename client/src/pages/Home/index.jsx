import React from "react";
import { Helmet } from "react-helmet-async";
import OurServices from "../../components/HomePageComponents/OurServices";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <OurServices/>
    </>
  );
};

export default Home;
