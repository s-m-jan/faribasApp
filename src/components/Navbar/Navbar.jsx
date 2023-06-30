import { Home, Search } from "@mui/icons-material";
import React from "react";
import styled from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className="container">
      <div className={styled.navbar}>
        <div id={styled.rightSide}>
          <Home />
          <span>وکیل پایه یک دادگستری </span>
          <span>صفحه اصلی</span>
          <span>درباره ما</span>
          <span>تماس با ما </span>
        </div>
        <div id={styled.leftSide}>
          <Search sx={{ fontSize: 40 }} />
        </div>
      </div>
    </div>
  );
}
