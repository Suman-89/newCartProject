import React, { useContext, useState } from "react";
import NoteContext from "./context/context";

export default function Menu() {
  const products = useContext(NoteContext);
  console.log("products -->", products);

  const handleClick = (param) => {
    // param.preventDefault();
    // console.log(param);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-primary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="./src/assets/images/project-high-resolution-logo.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            My Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar end  */}
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="src\assets\images\im4.jpeg"
              className="d-block w-100 h-50"
              alt="..."
            />
          </div>
          <div className="carousel-item active">
            <img
              src="src\assets\images\im5.jpeg"
              className="d-block w-100 h-50"
              alt="..."
            />
          </div>
        </div>
      </div>
      {/* Carousal end */}
      <br />
      <br />
      <h1>My Menu</h1>
      <br />
      <br />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          {Array.isArray(products) &&
            products.map((v, i) => (
              <>
                <tbody>
                  <tr>
                    <th scope="row" key={i}>
                      {i + 1}
                    </th>
                    <td>{v.title}</td>
                    <td>{v.brand ? v.brand : "Unknown"}</td>
                    <td>${v.price}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={()=>handleClick(v)}
                      >
                        Add to cart
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
        </table>
      </div>
    </>
  );
}
