import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./index.scss";
import SectionHeader from "../../components/HomePageComponents/SectionHeader";
import { WishlistContext } from "../../context/WishlistContext";
const AddPage = () => {
  const [services, setServices] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState(null);
  const { wishlist, addToWishlist } = useContext(WishlistContext);
  const [maxPrice, setMaxPrice] = useState();


  const getAllServices = async () => {
    const resp = await axios("http://localhost:3000/");
    setServices(resp.data);
  };
  const deleteService = async (id) => {
    await axios.delete(`http://localhost:3000/${id}`);
    getAllServices();
  };
  const onChange = (e) => {
    console.log("onChangeE: ", e.target.value);
  };
  const customSort = (e) => {
    return sort((a, b) => (a.title < b.title ? 1 : b.title < a.title ? -1 : 0));
  };
  useEffect(() => {
    getAllServices();
  }, []);
  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <section id="formik">
        <Formik
          initialValues={{ image: "", title: "", detail: "" }}
          validationSchema={Yup.object({
            image: Yup.string()
              .matches(
                /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?\/[a-zA-Z0-9]{2,}/,
                "Must be a URL!"
              )
              .required("Required"),
            title: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            detail: Yup.string()
              .max(150, "Must be 150 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(async () => {
              await axios.post("http://localhost:3000/", values);
              getAllServices();
              resetForm();
              setSubmitting(false);
            }, 400);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <SectionHeader title={"Add Service"} />
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                {...formik.getFieldProps("image")}
              />
              {formik.touched.image && formik.errors.image ? (
                <div className="error">{formik.errors.image}</div>
              ) : null}

              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                {...formik.getFieldProps("title")}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="error">{formik.errors.title}</div>
              ) : null}

              <label htmlFor="detail">Detail</label>
              <input
                id="detail"
                type="text"
                {...formik.getFieldProps("detail")}
              />
              {formik.touched.detail && formik.errors.detail ? (
                <div className="error">{formik.errors.detail}</div>
              ) : null}

              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </section>
      <section id="admin-table">
        <div className="container">
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <i class="fa-solid fa-magnifying-glass"></i>
          <button
            onClick={() => setSortValue({ property: "title", acs: false })}
          >
            A-Z
          </button>
          <button
            onClick={() => setSortValue({ property: "title", acs: true })}
          >
            Z-A
          </button>
          <button onClick={() => setSortValue(null)}>Default</button>
          <button
            onClick={() => setSortValue({ property: "detail", acs: false })}
          >
            Detail A-Z
          </button>
          <button
            onClick={() => setSortValue({ property: "detail", acs: true })}
          >
            Detail Z-A
          </button>
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Detail</th>
                <th>
                  <input type="range" onChange={onChange} max={1000} />
                </th>
              </tr>
            </thead>
            <tbody>
              {services &&
                services
                  .filter((item) =>
                    item.title.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  .sort((a, b) => {
                    if (sortValue && sortValue.acs === true) {
                      return a[sortValue.property] > b[sortValue.property]
                        ? 1
                        : b[sortValue.property] > a[sortValue.property]
                        ? -1
                        : 0;
                    } else if (sortValue && sortValue.acs === false) {
                      return a[sortValue.property] < b[sortValue.property]
                        ? 1
                        : b[sortValue.property] < a[sortValue.property]
                        ? -1
                        : 0;
                    } else {
                      return 0;
                    }
                  })
                  .map((item) => (
                    <tr key={item._id}>
                      <td>
                        <i className={item.image}></i>
                      </td>
                      <td>{item.title}</td>
                      <td>{item.detail}</td>
                      <td>
                        <button
                          onClick={() => deleteService(item._id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AddPage;
