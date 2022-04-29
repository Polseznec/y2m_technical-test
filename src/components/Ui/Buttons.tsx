import React from "react";
import styles from "../../../styles/Ui/Button.module.scss";

export const Button = ({ onClick, text }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export const ButtonSecondary = ({ onClick, text }) => {
  return (
    <button className={styles.button_secondary} onClick={onClick}>
      {text}
    </button>
  );
};
