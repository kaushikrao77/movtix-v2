import React from "react";
import styles from "./seating.module.css";
import seats from "../pages/seats/[id]";
export default function Seating({ divs, price, hc, isSeats, setSeats }) {
  function handleClose() {
    setSeats(false);
  }
  return (
    <div
      style={{ display: isSeats ? "block" : "none" }}
      className={styles.container}
    >
      <div onClick={handleClose} className={styles.xp}>
        <h3 className={styles.x}>X</h3>
      </div>
      <div className={styles.theatre}>
        <div className={styles.screen}></div>
        <div className={styles.seatgrid}>{divs}</div>
      </div>
      <div className={styles.book}>
        <div className={styles.price}>Cost : {price}</div>
        <button onClick={hc}>Book</button>
      </div>
    </div>
  );
}
