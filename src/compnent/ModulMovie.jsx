import React from "react";
//import { BrowserRouter } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AddMovie from "./AddMoive";
import Detail from "./Detail";
export default function ModulMovie() {
  return (
    // <BrowserRouter>

    <Routes>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path="/add" element={<AddMovie></AddMovie>}></Route>
      <Route path="/detail/:id" element={<Detail></Detail>}></Route>
    </Routes>

    // </BrowserRouter>
  );
}
