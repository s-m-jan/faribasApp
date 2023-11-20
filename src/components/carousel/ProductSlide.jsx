import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from "./ProductSlide.module.css"
import menschena11 from "../../assets/images/carouselImg/menschen-a11.jpg"
function ProductSlide() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <h1>products</h1>
            <Carousel responsive={responsive}>
            <div className={style.card}>
                    <img className={style.productImg} src={menschena11} alt="Menschen A1.1" />
                    <h3>کتاب Menschen سطح A1.1</h3>
                    <p className="price">195 هزار تومان</p>
                    <p>توضیحات لازم</p>
                    <p>
                        <button>افزودن به سبد خرید</button>
                    </p>
                </div>
                <div className={style.card}>
                    <img className={style.productImg} src={menschena11} alt="Menschen A1.1" />
                    <h3>کتاب Menschen سطح A1.1</h3>
                    <p className="price">195 هزار تومان</p>
                    <p>توضیحات لازم</p>
                    <p>
                        <button>افزودن به سبد خرید</button>
                    </p>
                </div>
                <div className={style.card}>
                    <img className={style.productImg} src={menschena11} alt="Menschen A1.1" />
                    <h3>کتاب Menschen سطح A1.1</h3>
                    <p className="price">195 هزار تومان</p>
                    <p>توضیحات لازم</p>
                    <p>
                        <button>افزودن به سبد خرید</button>
                    </p>
                </div>
                <div className={style.card}>
                    <img className={style.productImg} src={menschena11} alt="Menschen A1.1" />
                    <h3>کتاب Menschen سطح A1.1</h3>
                    <p className="price">195 هزار تومان</p>
                    <p>توضیحات لازم</p>
                    <p>
                        <button>افزودن به سبد خرید</button>
                    </p>
                </div>
                <div className={style.card}>
                    <img className={style.productImg} src={menschena11} alt="Menschen A1.1" />
                    <h3>کتاب Menschen سطح A1.1</h3>
                    <p className="price">195 هزار تومان</p>
                    <p>توضیحات لازم</p>
                    <p>
                        <button>افزودن به سبد خرید</button>
                    </p>
                </div>

              
            </Carousel>;
        </div>
    )
}

export default ProductSlide