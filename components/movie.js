import React from "react";
import styles from "./movie.module.css";
import Link from "next/link";

export default function Movie(props) {
  let back = `https://image.tmdb.org/t/p/w500${props.bd}`;
  return (
    <div className={styles.movie} style={{ backgroundImage: `url(${back})` }}>
      <div>
        <h2>{props.title}</h2>
      </div>
      <Link href="/seats/[id]" as={`/seats/${props.id}`}>
        <button>Book Tickets</button>
      </Link>
    </div>
  );
}
