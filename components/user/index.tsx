import React from "react";
import CustomInput from "../ui_components/customInput";
import styles from "./page.module.css";
import CustomButton from "../ui_components/customButton";

function User() {
  return (
    <div>
      <span className={styles.step}>Step 1 of 2</span>
      <div className={styles.title}>Let{"'"}s start with phone</div>
      <div className={styles.label}>
        Select your country and enter your phone number
      </div>

      <div>
        <CustomInput
          autoFocus
          inputType="phone"
          name="phone"
          placeholder="Phone number"
        />
        <CustomInput
          // inputType="phone"
          name="phone"
          placeholder="Phone number"
        />
      </div>

      <div className={styles.terms}>
        By continuing, I understand and agree to Journey Tracker’s{" "}
        <u>Privacy Policy</u> and <u>Terms of Use</u> for creating a Credet
        Account
      </div>
      <CustomButton name={"Continue"} />
    </div>
  );
}

export default User;
