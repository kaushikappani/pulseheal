import { SwipeableDrawer } from "@mui/material";
import React from "react";
import { Route,Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import ResponsiveDrawer from "./Components/Sidebar";

import Home from "./Pages/Home";
import Moniter from "./Components/Moniter";
import ButtonAppBar from "./Components/Appbar";

function App() {
  return (
    <>
      {/* <ResponsiveDrawer /> */}
      <ButtonAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/patient/:id" element ={<Moniter />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
