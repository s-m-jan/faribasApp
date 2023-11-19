import React from "react";
import ReactDOM from "react-dom/client";
import  "bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./fonts/IRANSansWebBold.ttf"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  
    <BrowserRouter>
    <Navbar/>
      <App />
      <Footer/>
    </BrowserRouter>
    
  </React.StrictMode>
);
