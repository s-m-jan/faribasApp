import React from "react";
import style from "./MovieBg.module.css";
import videoBg from "./../../assets/bgvideo00.mp4";
import faribaImage from "./../../assets/images/fariba01.png";
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
          <img src={faribaImage} alt="Fariba Eghbal" />
          <h1 style={{ margin: "15px", color: "rgb(255, 212, 96)" }}>
            به آموزشگاه آنلاینِ آلفا خوش آمدید
          </h1>
          <h3> گروه آموزشِ آلمانی فریبا اقبال </h3>
        </div>
      </div>
    </div>
  );
};

export default MovieBg;
