import React from "react";
import styled from "./AboutUs.module.css";
import FaribaImage from "./../../assets/images/fariba01.png";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function AboutUs() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={`container-fluid text-center ${styled.aboutUs}`}>
      <div className="row">
        <div className="col-12">
          <h1 className="fw-bold display-1" style={{color: "rgb(45, 64, 89)"}} >درباره ما</h1>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6">
          <div className={styled.imgContainer}>
            <img
              className={styled.sajjadImg}
              src={FaribaImage}
              alt="Sajjad Afkhami"
            />
          </div>
        </div>
        <div className="col-lg-6 ">
          <div className={`card ${styled.infoAbout}`} >
            <div className={`card-body ${styled.infoAboutBody}`}>
              <h5 className="card-title display-6 mb-4">به وبسایت گروه آموزشی فریبا اقبال خوش آمدید</h5>
              <p className="card-text lead cardContent">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو 
              </p>
              <button id={styled.ctaButton}>
                اطلاعات بیشتر
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
