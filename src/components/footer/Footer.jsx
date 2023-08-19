import React, { useState } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import law01 from "./../../assets/images/law01.jpg"
import {
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import FooterCard from "../footerCard/FooterCard";

function Footer() {
  const [showMore, setShowMore] = useState(false)
  const handleClick = ()=>{
    setShowMore(true)
  }
  return (
    <div className={styles.footerContainer}>
      <footer>
        <div className={styles.waves}>
          <div className={styles.wave} id={styles.wave1}></div>
          <div className={styles.wave} id={styles.wave2}></div>
          <div className={styles.wave} id={styles.wave3}></div>
          <div className={styles.wave} id={styles.wave4}></div>
        </div>

        <ul className={styles.menu} style={{ width: "100%" }}>
          
          <FooterCard src={law01} showMore={showMore} firstText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد." secondText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون..." onClick={handleClick}/>
          <FooterCard src={law01} showMore={showMore} firstText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد." secondText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون..." onClick={handleClick}/>
          <FooterCard src={law01} showMore={showMore} firstText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد." secondText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون..." onClick={handleClick}/>

         
        </ul>

        <div>
          <span>
            در نظر دارد با بروز رسانی در خدمات حقوقی کشور و ارتقاء خدمات وکالتی
            از سیستم سنتی به سبک نوین و همچنین تسهیل و تسریع در ارائه این قبیل
            خدمات به اشخاص (اعم از حقیقی و حقوقی) کم
          </span>
        </div>

        <p>
          آدرس : تهران , تجریش ، ابتدای فناخسرو ، جنب مجتمع تجاری تندیس ، پلاک
          16 ، واحد 1{" "}
        </p>

        <ul className={styles.socialIcon}>
          <li>
            <Link>
              <LinkedIn />
            </Link>
          </li>
          <li>
            <Link>
              <Facebook />
            </Link>
          </li>
          <li>
            <Link>
              <Twitter />
            </Link>
          </li>
          <li>
            <Link>
              <Telegram />
            </Link>
          </li>
          <li>
            <Link>
              <Instagram />
            </Link>
          </li>
        </ul>
        
        <p className="lead">
          {" "}
          2023 Mehdi Janfeshan | all rights reserved&copy;
        </p>
      </footer>
    </div>
  );
}

export default Footer;
