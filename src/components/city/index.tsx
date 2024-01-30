import React, { useState } from "react";
import CustomInput from "../ui_components/customInput";
import styles from "./page.module.css";
import CustomButton from "../ui_components/customButton";
import useValidate from "@/utils/validate";
import { useDispatch, useSelector } from "react-redux";
import { addCity, formData, updateCityInfo } from "@/slices/formSlice";
import { toast } from "react-toastify";
import { RiArrowLeftLine } from "react-icons/ri";

function City({
  pageIndex,
  setPageIndex,
}: {
  pageIndex: number;
  setPageIndex: any;
}) {
  const [loading, setLoading] = useState("Send data to server");

  const dispatch = useDispatch();
  const form = useSelector(formData);

  const errors: {
    firstName?: string;
    firstNameLength?: string;
    lastName?: string;
    lastNameLength?: string;
    dob?: string;
  } = useValidate(form.personalInfo);

  const handleCityInfoChange = (index: any, e: any) => {
    const { name, value } = e.target;
    dispatch(updateCityInfo({ index, field: name, value }));
  };

  const addCityHandler = () => {
    dispatch(addCity());
  };

  const submitData = () => {
    // Iterate through cities and check for empty fields
    for (const city of form.cities) {
      if (!city.cityName.trim()) {
        // alert("City Name is required.");
        toast.error("City Name is required", {
          position: "top-center",
        });
      }

      if (!city.dateArrived.trim()) {
        // alert("Date Arrived is required.");
        toast.error("Date Arrived is required", {
          position: "top-center",
        });
        return;
      }
    }

    setLoading("Loading.....");
    console.log(form);
    setTimeout(() => {
      setLoading("Send data to server");
      toast.success(
        "Data sent successfully, check your console to see the json data",
        {
          position: "top-center",
        }
      );
    }, 1500);
  };

  return (
    <div>
      <div>
        <div className={styles.back} onClick={() => setPageIndex(1)}>
          <RiArrowLeftLine />
          <span>Back</span>
        </div>
        <span className={styles.step}>Step {pageIndex} of 2</span>
        <div className={styles.title}>Let{"'"}s add cities</div>
        <div className={styles.label}>Enter your city information here</div>
        <button onClick={addCityHandler} className={styles.addmore}>
          Add more cities
        </button>

        {form.cities.map((_: any, i: number) => (
          <div key={i}>
            <CustomInput
              name="cityName"
              placeholder="City name"
              label="City name"
              value={form.cities[i]?.cityName}
              onChange={(e: any) => handleCityInfoChange(i, e)}
            />
            <CustomInput
              name="dateArrived"
              placeholder="Date of Arrival"
              type="date"
              label="Date of Arrival"
              value={form.cities[i]?.datearrived}
              onChange={(e: any) => handleCityInfoChange(i, e)}
              max={new Date().toISOString().split("T")[0]} // Set maximum date as today
            />
          </div>
        ))}

        <CustomButton
          name={loading}
          onClick={submitData}
          id={styles.button}
          disabled={
            Object.values(errors).length > 0 || loading === "Loading....."
          }
          // style={{ backgroundColor: loading === "Loading....." ? "red" : "" }}
          style={{
            backgroundColor:
              Object.values(errors).length > 0 || loading === "Loading....."
                ? "#e0e0e0"
                : "",
          }}
        />
      </div>
    </div>
  );
}

export default City;
