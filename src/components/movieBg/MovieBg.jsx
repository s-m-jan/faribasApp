import React from 'react'
import style from "./MovieBg.module.css"
import videoBg from "./../../assets/LawyerBg.mp4"
import sajjadImage from "./../../assets/images/sajjad.jpg";

const MovieBg = () => {
  return (
    <div className={style.main} >
        <div className={style.overlay}></div>
      <video src={videoBg} autoPlay loop muted/>
      <div className={style.content}>
        <img src={sajjadImage} alt="sajjad afkhaminia" />
        <h1 className='text-center'>به وبسایت شخصی سجاد افخمی نیا وکیل پایه یک دادگستری خوش آمدید</h1>
        <h3>قبول کلیه دعاوی حقوقی</h3>
      </div>
    </div>
  )
}

export default MovieBg
