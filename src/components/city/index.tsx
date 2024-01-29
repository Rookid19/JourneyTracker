import React, { useState } from "react";
import CustomInput from "../ui_components/customInput";
import styles from "./page.module.css";
import CustomButton from "../ui_components/customButton";

function City({
  pageIndex,
  setPageIndex,
}: {
  pageIndex: number;
  setPageIndex: any;
}) {
  const [loading, setLoading] = useState("Send data to server");
  const [count, setCount] = useState(1);

  const submitData = () => {
    setLoading("Loading.....");
    setTimeout(() => {
      setLoading("Send data to server");
    }, 1500);
  };

  return (
    <div>
      <div>
        <span className={styles.step}>Step {pageIndex} of 2</span>
        <div className={styles.title}>Let{"'"}s add cities</div>
        <div className={styles.label}>Enter your city information here</div>
        <button onClick={() => setCount(count + 1)}>Add more cities</button>

        {[...Array(count)].map((_, i) => (
          <div key={i}>
            <CustomInput
              name="cityname"
              placeholder="City name"
              label="City name"
            />
            <CustomInput
              name="datearrived"
              placeholder="Date of Arrival"
              type="date"
              label="Date of Arrival"
              // id={name}
              // value={value}
              // onChange={onChange}
              max={new Date().toISOString().split("T")[0]} // Set maximum date as today
            />
          </div>
        ))}

        <CustomButton
          name={loading}
          onClick={submitData}
          id={styles.button}
          disabled={loading === "Loading....."}
          style={{ backgroundColor: loading === "Loading....." ? "red" : "" }}
        />
      </div>
    </div>
  );
}

export default City;
