import React, { useState, useContext } from "react";
import Seat from "../../components/seat";
import NavB from "../../components/navB";
import MovieInfo from "../../components/movieInfo";
import styles from "../../styles/seats.module.css";
import { SeatContext } from "../../contexts/seatContext";
import fetch from "node-fetch";

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=574f5934b3cc3bfa874c0a5ce4d88d74&language=en-US`
  );
  const data = await res.json();
  return {
    props: { movieData: data },
  };
}

export default function seats({ movieData }) {
  const { gseats, setGseats } = useContext(SeatContext);
  const [seat, setSeat] = useState(Array(50).fill(false));
  let price = 0;
  let count = seat.filter((value) => value).length;
  price = count * 125;
  let dis = gseats[`${movieData.id}`] ? gseats[`${movieData.id}`] : false;
  function toggleSeat(id) {
    let temp = [...seat];
    temp[id] = !temp[id];
    setSeat(temp);
  }
  function handleClick() {
    let tempSeats = gseats;
    if (!gseats[`${movieData.id}`]) gseats[`${movieData.id}`] = seat;
    else {
      seat.forEach((ele, id) => {
        if (ele === true) tempSeats[`${movieData.id}`][id] = true;
      });
    }
    setGseats(tempSeats);
    setSeat(Array(50).fill(false));
  }
  let divs = [...Array(50)].map((ele, id) => (
    <Seat
      disabled={dis ? dis[id] : false}
      toggleSeat={toggleSeat}
      selected={seat[id]}
      id={id}
      key={id}
    ></Seat>
  ));
  return (
    <div className={styles.seats}>
      <NavB />
      <MovieInfo
        name={movieData ? movieData.title : ""}
        overview={movieData ? movieData.overview : ""}
        bd={movieData ? movieData.backdrop_path : ""}
        rating={movieData ? movieData.vote_average : ""}
      />
      <div className={styles.theatre}>
        <div className={styles.screen}></div>
        <div className={styles.seatgrid}>{divs}</div>
      </div>
      <div className={styles.book}>
        <div className={styles.price}>Cost : {price}</div>
        <button onClick={handleClick}>Book</button>
      </div>
    </div>
  );
}
