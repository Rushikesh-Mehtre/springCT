import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Header = () => {
  const [menuShown, SetMenuShown] = useState(true);
  const hamClickHandler = () => {
    if (mql.matches) {
      SetMenuShown(!menuShown);
    }
  };
  let mql = window.matchMedia("(max-width:500px)");

  useEffect(() => {
    if (mql.matches) {
      SetMenuShown(false);
    }
  }, [mql.matches]);
  const logoClickHandler = () => {
    if (mql.matches) {
      SetMenuShown(false);
    }
  };
  return (
    <div className={styles.header}>
      <div className={styles.logoBox}>
        <Link to="/" className={styles.logo} onClick={logoClickHandler}>
          SpringCT
        </Link>
        <div className={styles.hamMenu}>
          {menuShown === false ? (
            <GiHamburgerMenu className={styles.ham} onClick={hamClickHandler} />
          ) : (
            <ImCross className={styles.cross} onClick={hamClickHandler} />
          )}
        </div>
      </div>

      {menuShown && (
        <div className={styles.menuItems}>
          <Link to="/" className={styles.add} onClick={hamClickHandler}>
            Add
          </Link>
          <Link
            to="/viewitems"
            className={styles.view}
            onClick={hamClickHandler}
          >
            View
          </Link>
          <Link to="/about" onClick={hamClickHandler}>
            About
          </Link>
          <Link to="/services" onClick={hamClickHandler}>
            Services
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
