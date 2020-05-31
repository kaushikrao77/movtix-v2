import React from "react";
import styles from "./movieInfo.module.css";

export default function MovieInfo(props) {
  let back = `https://image.tmdb.org/t/p/w500${props.bd}`;
  function handleClick() {
    props.setSeats(true);
    props.movieData.update(2);
  }
  return (
    <div className={styles.movieInfo}>
      <div
        style={{ backgroundImage: `url(${back})` }}
        className={styles.bd}
      ></div>
      <div className={styles.text}>
        <h1>{props.name}</h1>
        <p>{props.overview}</p>
        <br />
        <h2>Cost:{parseInt(props.cost)}</h2>
        <button onClick={handleClick}>Book Tickets</button>
      </div>
    </div>
  );
}
