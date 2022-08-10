import React from "react";
import { CardItem } from "./CardItem";
import styles from "./CardList.module.css";

export const CardList = ({ items }) => {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </div>
  );
};
