/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import StateWiseShopkeeper from "./StateWiseShopkeeper";

function Layout() {
  const [state, setState] = useState("");
  const [status, setStatus] = useState(false);
  const handleSearch = (state) => {
    if (state !== "") setState(state);
    setStatus(true);
  };

  return (
    <>
      <Header onSearch={handleSearch} />

      {status ? state && <StateWiseShopkeeper state={state} /> : <Outlet />}

      <Footer />
    </>
  );
}

export default Layout;
