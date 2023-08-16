import React from "react";
import styles from "./Footer.module.css"
import { Link } from "react-router-dom";
import { Facebook, Instagram, LinkedIn, Telegram, Twitter } from "@mui/icons-material";


function Footer() {
  return (
    <div className={styles.footerContainer} >
      <footer>
        <div className={styles.waves}>
          <div className={styles.wave} id={styles.wave1}></div>
          <div className={styles.wave} id={styles.wave2}></div>
          <div className={styles.wave} id={styles.wave3}></div>
          <div className={styles.wave} id={styles.wave4}></div>
        </div>
        <ul className={styles.socialIcon}>
          <li>
            <Link>
            <LinkedIn/>
            </Link>
          </li>
          <li>
          <Link>
            <Facebook/>
            </Link>
          </li>
          <li>
          <Link>
           <Twitter/>
            </Link>
          </li>
          <li>
          <Link>
            <Telegram/>
            </Link>
          </li>
          <li>
          <Link>
            <Instagram/>
            </Link>
          </li>
        </ul>
        <ul className={styles.menu}>
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Services</Link>
          </li>
          <li>
            <Link to="#">Team</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
        <p>آدرس : تهران , تجریش ، ابتدای فناخسرو ، جنب مجتمع تجاری تندیس ، پلاک 16 ، واحد 1   </p>
        <p> 2023 Mehdi Janfeshan | all rights reserved&copy;</p>
      </footer>
    </div>
  );
}

export default Footer;
