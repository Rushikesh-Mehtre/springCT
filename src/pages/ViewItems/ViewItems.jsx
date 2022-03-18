import React from "react";
import { Link } from "react-router-dom";
import styles from "./ViewItem.module.scss";
const ViewItems = (props) => {
  const headerArray = [
    "Sr. No.",
    "Name",
    "Email",
    "Mobile Number",
    "Work Experience",
    "Located in Pune ? ",
    "Message",
  ];
  return (
    <div className={styles.viewItems}>
      <p className={styles.head}>List of user data</p>
      <table>
        {props.userData && (
          <thead>
            <tr>
              {headerArray.map((item, index) => {
                return <th key={index}>{item}</th>;
              })}
            </tr>
          </thead>
        )}
        <tbody>
          {props.userData &&
            props.userData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.sr}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.workex}</td>
                  <td>{item.puneLocation ? "Yes" : "No"}</td>
                  <td>{item.message}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className={styles.add}>
        <Link to="/" className={styles.addLink}>
          Add user
        </Link>
      </div>
    </div>
  );
};

export default ViewItems;
