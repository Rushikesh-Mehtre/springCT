import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LeftNav.module.scss";
const LeftNav = () => {
  return (
    <div className={styles.leftNav}>
      <Link to="/">Add </Link>
      <Link to="/viewitems">View</Link>
    </div>
  );
};

export default LeftNav;
