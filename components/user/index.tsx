import React, { useEffect, useRef } from "react";
import CustomInput from "../ui_components/customInput";
import styles from "./page.module.css";
import CustomButton from "../ui_components/customButton";

function User() {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if the inputEl and its current property are not null before calling focus()
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);

  return (
    <div>
      <span className={styles.step}>Step 1 of 2</span>
      <div className={styles.title}>
        Let{"'"}s start with your personal information
      </div>
      <div className={styles.label}>
        Select your country and enter your phone number
      </div>

      <div>
        <CustomInput
          name="firstname"
          placeholder="First name"
          label="First name"
        />
        <CustomInput
          name="lastname"
          placeholder="Last name"
          label="Last name"
        />
        <CustomInput
          name="dob"
          placeholder="Date of Birth"
          type="date"
          label="Date of Birth"
          // id={name}
          // value={value}
          // onChange={onChange}
          max={new Date().toISOString().split("T")[0]} // Set maximum date as today
        />
      </div>

      <div className={styles.terms}>
        By continuing, I understand and agree to Journey Tracker’s{" "}
        <u>Privacy Policy</u> and <u>Terms of Use</u> for creating an Account
      </div>
      <CustomButton name={"Continue"} />
    </div>
  );
}

export default User;
