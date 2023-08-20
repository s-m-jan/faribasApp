import React from "react";
import styled from "./AboutUs.module.css";
import sajjadImage from "./../../assets/images/sajjad.jpg";

export default function AboutUs() {
  return (
    <div className={`container-fluid text-center ${styled.aboutUs}`}>
      <div className="row">
        <div className="col-12">
          <h1 className="fw-bold">درباره وکیل</h1>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-6">
          <div>
            <img  src={sajjadImage} alt="Sajjad Afkhami" />
          </div>
        </div>
        <div className="col-lg-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum culpa sequi optio! Atque consectetur facilis numquam, nisi nam rem cum in quam nobis ex amet alias quas fugiat corrupti?
        </div>
      </div>
    </div>
  );
}
