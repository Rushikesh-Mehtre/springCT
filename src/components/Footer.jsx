import React from "react";
import styles from "../styles/Footer.module.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>SpringCT &copy; 2022 | All rights reserved </p>
      <div className={styles.socialIcons}>
        <AiFillFacebook className={styles.icon} />
        <AiFillInstagram className={styles.icon} />
        <AiFillLinkedin className={styles.icon} />
        <AiFillYoutube className={styles.icon} />
      </div>
    </div>
  );
};

export default Footer;
