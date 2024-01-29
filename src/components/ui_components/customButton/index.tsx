import React from "react";
import styles from "./page.module.css";

function CustomButton({ name, ...props }: any) {
  return (
    <button className={styles.button} {...props}>
      {name}
    </button>
  );
}

export default CustomButton;
