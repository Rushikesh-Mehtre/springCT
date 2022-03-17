import React, { useState } from "react";
import styles from "./AddItem.module.scss";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
const AddItem = (props) => {
  const [userArray, setUserArray] = useState([]);
  console.log(userArray);
  props.onClick(userArray);

  const [userData, setUserData] = useState({
    sr: 1,
    name: "",
    email: "",
    mobile: "",
    workex: "",
    puneLocation: false,
    message: "",
  });
  const submitHandler = () => {
    if (
      !userData.name ||
      !userData.email ||
      !userData.mobile ||
      !userData.workex ||
      !userData.puneLocation ||
      !userData.message
    ) {
      Toastify({
        text: "Please fill all the details.",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "center",
        backgroundColor: "#993612",
        stopOnFocus: true,
      }).showToast();
      return;
    } else {
      setUserData({ ...userData, sr: userData.sr + 1 });
      setUserArray([...userArray, userData]);
      console.log(userArray);
      console.log(userData);

      localStorage.setItem("users", JSON.stringify(userArray));
      Toastify({
        text: "New user information added.",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "center",
        backgroundColor: "rgb(11 116 26)",
        stopOnFocus: true,
      }).showToast();
      setUserData({
        name: "",
        email: "",
        mobile: "",
        workex: "",
        puneLocation: false,
        message: "",
      });
    }
  };

  return (
    <div className={styles.addItem}>
      <p className={styles.head}>Submit your form</p>
      <form action="">
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={userData.name}
          onChange={(e) => {
            setUserData({ ...userData, name: e.target.value });
          }}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={userData.email}
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
        />
        <label htmlFor="">Mobile</label>
        <input
          type="text"
          maxLength="10"
          placeholder="Enter your mobile number"
          value={userData.mobile}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onChange={(e) => {
            setUserData({ ...userData, mobile: e.target.value });
          }}
        />
        <label htmlFor="">Work Experience</label>
        <select
          name=""
          id=""
          className={styles.select}
          value={userData.workex}
          onChange={(e) => {
            setUserData({ ...userData, workex: e.target.value });
          }}
        >
          <option value="fresher">fresher</option>
          <option value="6 months">6 months</option>
          <option value="1 year">1 years</option>
          <option value="2 year">2 years</option>
          <option value="3 years">3 years</option>
        </select>
        <div className={styles.checkBox}>
          <input
            type="checkbox"
            checked={userData.puneLocation}
            value={userData.puneLocation}
            onChange={(e) => {
              setUserData({ ...userData, puneLocation: e.target.checked });
            }}
          />
          <label htmlFor="">Do you reside in Pune ? </label>
        </div>
        <label htmlFor="">Let us know more about you</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your message here"
          value={userData.message}
          onChange={(e) => {
            setUserData({ ...userData, message: e.target.value });
          }}
        ></textarea>
        <input
          type="button"
          value="Submit"
          className={styles.btn}
          onClick={submitHandler}
        />
      </form>
    </div>
  );
};

export default AddItem;
