import React, { useEffect, useState } from "react";
import NoteContext from "./context/context";
import axios from "axios";

export default function Index(item) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <>
      <NoteContext.Provider value={data}>{item.children}</NoteContext.Provider>
    </>
  );
}
