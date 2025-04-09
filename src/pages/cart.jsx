import React, { useContext, useEffect, useState } from "react";
import NoteContext from "./context/context";

export default function Mycart() {
  const [allData, setAllData] = useState([]);
  // console.log("all data -->", allData);

  // let allData = useContext(NoteContext);

  // console.log(allData);
  useEffect(() => {
    const itemData = JSON.parse(localStorage.getItem("cartItems"));
    if (itemData) {
      setAllData([...allData, itemData]);
    }
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-primary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
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
      <br />
      <br />
      <h1>My Cart</h1>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        {Array.isArray(allData) &&
          allData.map(v => (
            // console.log("v",v)
            Array.isArray(v) && v.map((data,index)=>(
              <tbody key={index}>
              <tr >
                <th scope="row" >{index + 1}</th>
                <td>{data.title}</td>
                <td>Otto</td>
                <td>${data.price}</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
            ))

            
          ))}
      </table>
    </>
  );
}
