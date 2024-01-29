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
        <div className="label">{label}</div>
      </div>

      <input
        {...props}
        className="custom-input"
        placeholder={placeholder}
        style={{
          backgroundColor: inputType === "phone" && "white",
          paddingInline: inputType === "phone" ? 5 : 15,
          fontSize: inputType === "phone" ? 28 : 15,
        }}
      />
    </div>
  );
}

export default CustomInput;
