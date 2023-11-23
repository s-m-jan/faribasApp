import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img01 from "../../assets/images/slideShow/Bücher.jpg"
import Img02 from "../../assets/images/slideShow/Serien.png"
import Img03 from "../../assets/images/slideShow/online.jpg"

const ProductSlide = () => {
  return (
    <div>
        <Carousel className="my-2">
      <Carousel.Item>
        <img src={Img01} className="d-block w-100" text="First slide" />
        <Carousel.Caption>
          <h3 style={{color : "red"}}>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Img02} className="d-block w-100" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Img03} className="d-block w-100" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default ProductSlide;
