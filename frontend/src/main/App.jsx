import "./App.css";
import React from "react";

import Logo from "../components/templates/Logo";
import Footer from "../components/templates/Footer";
import Main from "../components/templates/Main";
import Nav from "../components/templates/Nav";

export default props => 
  <div className="app">
    <Logo />
    <Nav />
    <Main />
    <Footer />
  </div>
