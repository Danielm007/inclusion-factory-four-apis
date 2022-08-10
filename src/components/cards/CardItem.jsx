import { format } from "date-fns";
import React from "react";
import styles from "./CardItem.module.css";

export const CardItem = ({ hostname, error, message, time }) => {
  return (
    <div className={styles.card}>
      <h1>{hostname.split("-")[0]}</h1>
      <p className={error ? styles.error : styles.success}>
        {message.split(":3")[0]}
      </p>
      {error ? (
        <p className={styles.red}>OUTAGE ERROR</p>
      ) : (
        <p className={styles.black}>{hostname}</p>
      )}
      <p className={styles.black}>{time ? format(time, "HH:mm:ss") : error}</p>
    </div>
  );
};
