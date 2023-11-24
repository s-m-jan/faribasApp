import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img01 from "../../assets/images/slideShow/books.jpg"
import Img02 from "../../assets/images/slideShow/Serien.png"
import Img03 from "../../assets/images/slideShow/online.jpg"
import { Link } from "react-router-dom";
import style from "./ProductSlide.module.css"

const ProductSlide = () => {
  return (
    <div >
        <Carousel className="my-2">
      <Carousel.Item>
        <img src={Img01} className="d-block w-100" text="First slide" />
        <Carousel.Caption className={style.productDesc}>
          <h1 >کتاب های آموزشی</h1>
          <h3 >برای مشاهده فهرست کتاب ها <Link to="/"><a>اینجا</a></Link> کلیک کنید</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Img02} className="d-block w-100" text="Second slide" />
        <Carousel.Caption className={style.productDesc}>
          <h1>فیلم و سریال </h1>
          <h3>برای مشاهده فهرست فیلم ها و سریال های آلمانی <Link to="/"><a>اینجا</a></Link> کلیک کنید</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Img03} className="d-block w-100" text="Third slide" />
        <Carousel.Caption className={style.productDesc}>
          <h1 >دوره های آنلاین</h1>
          <h3 >برای ثبت نام در دوره های آنلاین <Link to="/contact"><a>اینجا</a></Link> کلیک کنید</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default ProductSlide;
