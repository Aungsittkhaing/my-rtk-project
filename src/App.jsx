import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Details from "./components/Detail";
import Edit from "./components/Edit";
import Store from "./components/Store";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Store />}></Route>
        <Route path="/stores/:id" element={<Details />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </div>
  );
};

export default App;
