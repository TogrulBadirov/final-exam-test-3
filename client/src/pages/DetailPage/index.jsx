import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
const DetailPage = () => {
  const { id } = useParams();
  const [service, setService] = useState();
  const getService = async () => {
    const resp = await axios(`http://localhost:3000/${id}`);
    setService(resp.data);
  };
  useEffect(() => {
    getService();
  }, []);

  return (
    <>
      <section id="detail-section">
      <div className="container">
      <div className="service-detail">
      <h3>DetailPage</h3>
      <ul>
        <li><i class={service && service.image}></i></li>
        <li><h3>{service && service.title}</h3></li>
        <li>{service && service.detail}</li>
      </ul>
      </div>
      </div>
      </section>
    </>
  );
};

export default DetailPage;
