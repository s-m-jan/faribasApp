import {
  Group,
  ShopSharp,
  Home,
  Newspaper,
  Search,
  School,
  ShoppingCartSharp
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo01.png";
const linkStyle = {
  textDecoration: "none",
};

export default function Navbar() {
  return (

    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "rgba(75, 75, 75,0.7)", marginTop: "40px" }}
      >
        <span class="navbar-brand" href="#">
          <img style={{ maxHeight: "40px" }} src={logo} alt="logo" />
        </span>
        <div className="container-fluid ">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div style={{width: "100%"}} class="navbar-nav d-flex justify-content-around">
              <div>
                <Link to="/" style={linkStyle}>
                  <a className="navbar-brand">
                    <Home className="ms-2" style={{color: "rgba(255, 175, 64,1.0)"}} />
                    <span style={{ color: "#fff" }}>صفحه اصلی</span>
                  </a>
                </Link>
              </div>

              <div>
                {" "}
                <Link to="/articles" style={linkStyle}>
                  <a className="navbar-brand">
                    <Newspaper className="ms-2" style={{color: "rgba(255, 175, 64,1.0)"}} />
                    <span style={{ color: "#fff" }}> مقالات </span>
                  </a>
                </Link>
              </div>
              <div>
              <Link to="/" style={linkStyle}>
                  <a className="navbar-brand">
                    <ShopSharp className="ms-2" style={{color: "rgba(255, 175, 64,1.0)"}}/>
                    <span style={{ color: "#fff" }}> محصولات </span>
                  </a>
                </Link>
                
              </div>
              <div>
              <Link to="/" style={linkStyle}>
                  <a className="navbar-brand">
                    <ShoppingCartSharp className="ms-2" style={{color: "rgba(255, 175, 64,1.0)"}}/>
                    <span style={{ color: "#fff" }}> سبد خرید </span>
                  </a>
                </Link>
                
              </div>
              <div>
              <Link to="/contact" style={linkStyle}>
                  <a className="navbar-brand">
                    <School className="ms-2" style={{color: "rgba(255, 175, 64,1.0)"}}/>
                    <span style={{ color: "#fff" }}> رزرو کلاس </span>
                  </a>
                </Link>
                
              </div>
              <div>
              <Link to="/about" style={linkStyle}>
                  <a className="navbar-brand">
                    <Group className="ms-2" style={{color: "rgba(255, 175, 64,1.0)"}} />
                    <span style={{ color: "#fff" }}>درباره ما </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <form className="d-none d-lg-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="جستجو"
              aria-label="Search"
            />
            <button className="btn me-1 btn-outline-info" type="submit">
              <Search sx={{ fontSize: 30 }} />
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
