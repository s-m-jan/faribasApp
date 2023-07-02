import { Home, Search } from "@mui/icons-material";
import React from "react";
import styled from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container">
      <div className={styled.navbar}>
        <div id={styled.rightSide}>
          <Home />
          <Link to="/">وکیل پایه یک دادگستری </Link>
          <Link to="/">صفحه اصلی</Link>
          <Link to="/faq">سوالات متداول</Link>
          <Link to="/about">درباره ما</Link>
          <Link to="/contact">تماس با ما </Link>
        </div>
        <div id={styled.leftSide}>
          <Search sx={{ fontSize: 40 }} />
        </div>
      </div>
    </div>
  );
}
