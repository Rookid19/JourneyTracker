import React, { useEffect, useRef, useState } from "react";
import CustomInput from "../ui_components/customInput";
import styles from "./page.module.css";
import CustomButton from "../ui_components/customButton";
import { useDispatch, useSelector } from "react-redux";
import { formData, updatePersonalInfo } from "@/slices/formSlice";
import useValidate from "@/utils/validate";

function User({
  pageIndex,
  setPageIndex,
}: {
  pageIndex: number;
  setPageIndex: any;
}) {
  const dispatch = useDispatch();
  const form = useSelector(formData);

  const handlePersonalInfoChange = (e: {
    target: { name: any; value: any };
  }) => {
    const { name, value } = e.target;
    // setUserInfo({ ...userInfo, [name]: value });
    dispatch(updatePersonalInfo({ ...form.personalInfo, [name]: value }));
  };

  const errors: {
    firstName?: string;
    firstNameLength?: string;
    lastName?: string;
    lastNameLength?: string;
    dob?: string;
  } = useValidate(form.personalInfo);

  return (
    <div>
      {JSON.stringify(form.personalInfo)}
      {/* {JSON.stringify(validateErrors)} */}
      <br />
      <span className={styles.step}>Step {pageIndex} of 2</span>
      <div className={styles.title}>
        Let{"'"}s start with your personal information
      </div>
      <div className={styles.label}>Enter your name and date of birth</div>

      <div>
        <CustomInput
          name="firstName"
          placeholder="First name"
          label="First name"
          value={form.personalInfo.firstName}
          onChange={handlePersonalInfoChange}
        />
        {errors.firstName && (
          <div className={styles.error}>{errors.firstName}</div>
        )}
        <CustomInput
          name="lastName"
          placeholder="Last name"
          label="Last name"
          value={form.personalInfo.lastName}
          onChange={handlePersonalInfoChange}
        />
        {errors.lastName && (
          <div className={styles.error}>{errors.lastName}</div>
        )}
        <CustomInput
          name="dob"
          placeholder="Date of Birth"
          type="date"
          label="Date of Birth"
          value={form.personalInfo.dob}
          onChange={handlePersonalInfoChange}
          max={new Date().toISOString().split("T")[0]} // Set maximum date as today
        />
        {errors.dob && (
          <div className={styles.error}>{errors.dob}</div>
        )}
      </div>

      <div className={styles.terms}>
        By continuing, I understand and agree to Journey Tracker’s{" "}
        <u>Privacy Policy</u> and <u>Terms of Use</u> for creating an Account
      </div>
      <CustomButton name={"Continue"} onClick={() => setPageIndex(2)} />
    </div>
  );
}

export default User;
