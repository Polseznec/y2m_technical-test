import React from "react";

import styles from "../../../styles/Ui/Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
