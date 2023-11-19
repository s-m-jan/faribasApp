import React from "react";
import style from "./MovieBg.module.css";
import videoBg from "./../../assets/bgvideo00.mp4";
import faribaImage from "./../../assets/images/logo01.png";
import mapImage from "./../../assets/images/map.png";

const MovieBg = () => {
  return (
    <div className={style.main}>
      <div className={style.overlay}></div>
      <video src={videoBg} autoPlay loop muted />
      <div className={style.content}>
        <div className={style.right}>
          <img src={mapImage} alt="german map" />
        </div>
        <div className={style.left}>
          <h1 style={{ margin: "15px", color: "rgb(255, 212, 96)" }}>
            اینجا <img src={faribaImage} alt="Fariba Eghbal" /> هستش
          </h1>
          <h3> اگر قصد مهاجرت به آلمان رو داری و میخوای آلمانی رو در سریع ترین زمان ممکن یاد بگیری  جای درستی اومدی!!!! </h3>
        </div>
      </div>
    </div>
  );
};

export default MovieBg;
