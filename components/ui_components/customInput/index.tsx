import React from "react";
import styles from "./page.module.css";

function CustomInput({
  placeholder,
  inputType,
  label,
  tooltipTitle,
  ...props
}: any) {
  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center" }}
        className={styles.labelContainer}
      >
        <div className={styles.label}>{label}</div>
      </div>

      <input
        {...props}
        className={styles.custom_input}
        placeholder={placeholder}
        style={{
          //   backgroundColor: inputType === "phone" && "white",
          //   paddingInline: inputType === "phone" ? 5 : 15,
          //   fontSize: inputType === "phone" ? 28 : 15,
          backgroundColor: "white",
          paddingInline: 5,
          fontSize: 28,
        }}
      />
    </div>
  );
}

export default CustomInput;
