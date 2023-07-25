import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style/App.css";
import "./pages/pages.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Places from "./pages/Places";
import Restaurants from "./pages/Restaurants";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./components/Create/Create";
import Place from "./pages/Place"
function App() {
  axios.defaults.baseURL = "https://localhost:7041";
  axios.defaults.headers.common["Content-Type"] = "application/json";

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/About" Component={About} />
          <Route path="/Places" Component={Places} />
          <Route path="/Place/:placeId" Component={Place} />
          <Route path="/Restaurants" Component={Restaurants} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/adminPanel" Component={Create} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
