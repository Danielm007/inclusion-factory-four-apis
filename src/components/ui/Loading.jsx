import React from "react";
import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles["lds-dual-ring"]} />
        <p>Loading</p>
      </div>
    </div>
  );
};
