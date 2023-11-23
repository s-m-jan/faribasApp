import React, { useState } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import menschen from "./../../assets/images/Menschen-Book-Series.jpg"
import startenWir from "./../../assets/images/startenwir.jpg"
import sicher from "./../../assets/images/sicher.jpg"
import {
  YouTube,
  Instagram,
  LinkedIn,
  Telegram,
} from "@mui/icons-material";
import FooterCard from "../footerCard/FooterCard";

function Footer() {
 
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
          
          <FooterCard src={menschen}  firstText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد." secondText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون..." />
          <FooterCard src={startenWir}  firstText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد." secondText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون..." />
          <FooterCard src={sicher}  firstText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد." secondText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون..." />

         
        </ul>

        <div className="my-3 text-center">
          <span className="h3 fw-bold" style={{color : "rgb(255, 242, 0)"}}>
              پکیج های آموزشی آلفا به صورت سطح بندی شده و همراه با پشتیبانی آنلاین برای یادگیری اصولی زبان آلمانی از سطوح مقدماتی تا پیشرفته طراحی شده تا زبان آموز پس از یادگیری مباحث با شرکت در جلسه رفع اشکال و تمرین مکالمه که بخشی از پکیج ارائه شده می باشد بتواند از توانایی خود برای ورود به سطح بالاتر اطمینان کسب کند.   
          </span>
        </div>

        <h3>
          شماره تماس: 09380521703
        </h3>

        <ul className={styles.socialIcon}>
          <li>
            <Link>
              <LinkedIn />
            </Link>
          </li>
          <li>
            <Link>
              < YouTube/>
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
