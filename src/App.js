import React from "react";
import { Routes, Route } from "react-router-dom";
import { Typography } from "antd";

import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main">
        <div className="routes">
          <Routes>
            //By default Homepage component is gonna show up in main as its path is "/"
            <Route exact path="/" element={<Homepage />} />
            //If user clicks on cryptocurrencies menu in navbar then as its linked to "/cryptocurrencies"
            //the below route triggers nd Cryptocurrencies component is gonna show up
            <Route
              exact
              path="/cryptocurrencies"
              element={<Cryptocurrencies />}
            />
            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
          </Routes>
        </div>
        <div className="footer">
          <Typography.Title
            level={2}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoInsights <br />
            All rights reserved.
          </Typography.Title>
          <p style={{ color: "white" }}>By Dharmadeep Madisetty</p>
        </div>
      </div>
    </div>
  );
};

export default App;
