import React from "react";
import { Link } from "react-router-dom";

import styles from "./HomeNav.module.css";

const homeNav = () => {
  return (
    <Link to="/">
      <img className={styles.Logo} src={require("../../assets/img/logo_4x.png")} alt="Cooking the Books" />
    </Link>
  );
};

export default homeNav;
