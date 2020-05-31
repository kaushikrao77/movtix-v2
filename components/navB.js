import React from "react";
import styles from "./navB.module.css";
import Link from "next/link";

export default function NavB() {
  return (
    <div className={styles.NavB}>
      <Link href="/">
        <h1 style={{ cursor: "pointer" }}>MovTix</h1>
      </Link>
    </div>
  );
}
