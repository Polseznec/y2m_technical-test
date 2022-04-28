import React from "react";
import styles from "../../../styles/Ui/Button.module.scss";

export const Button = ({ onClick, text }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
