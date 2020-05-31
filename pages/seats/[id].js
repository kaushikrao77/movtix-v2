import React, { useState, useContext, useEffect } from "react";
import Seat from "../../components/seat";
import NavB from "../../components/navB";
import MovieInfo from "../../components/movieInfo";
import Seating from "../../components/seating";
import styles from "../../styles/seats.module.css";
import { SeatContext } from "../../contexts/seatContext";
import { movArr, MovieClass } from "../../lib/utils";
import { AlgoContext } from "../../contexts/algoContext";

export async function getServerSideProps({ params }) {
  return {
    props: { params },
  };
}
export default function seats({ params }) {
  const { algo, setAlgo } = useContext(AlgoContext);
  const [isSeats, setSeats] = useState(false);
  let movieData;
  algo.forEach((movi, id) => {
    if (movi.id === Number(params.id)) {
      movieData = movi;
      return;
    }
  });
  const { gseats, setGseats } = useContext(SeatContext);
  const [seat, setSeat] = useState(Array(50).fill(false));
  let price = 0;
  let count = seat.filter((value) => value).length;
  price = count * movieData.calculate();
  console.log(price);
  let dis = gseats[`${movieData.id}`] ? gseats[`${movieData.id}`] : false;
  function toggleSeat(id) {
    let temp = [...seat];
    temp[id] = !temp[id];
    setSeat(temp);
  }
  useEffect(() => {
    algo.forEach((mov, idx) => {
      if (mov.id === Number(params.id)) {
        mov.update(1);
        // let tempAlgo = [...algo];
        // tempAlgo[idx] = movieData;
        // setAlgo(tempAlgo);
        return;
      }
    });
  }, []);
  function handleClick() {
    let ct = 0;
    seat.forEach((bol) => {
      if (bol) ct++;
    });
    movieData.update(4, ct);
    let tempSeats = gseats;
    if (!gseats[`${movieData.id}`]) tempSeats[`${movieData.id}`] = seat;
    else {
      seat.forEach((ele, id) => {
        if (ele === true) {
          tempSeats[`${movieData.id}`][id] = true;
        }
      });
    }
    setGseats(tempSeats);
    setSeat(Array(50).fill(false));
    movieData.update(3);
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
  console.log(
    movieData.views,
    movieData.click_rate,
    movieData.book_rate,
    movieData.remaining_seats
  );
  return (
    <div className={styles.seats}>
      <NavB />
      <MovieInfo
        name={movieData ? movieData.title : ""}
        overview={movieData ? movieData.overview : ""}
        bd={movieData ? movieData.backdrop_path : ""}
        rating={movieData ? movieData.vote_average : ""}
        setSeats={setSeats}
        cost={movieData.calculate()}
        movieData={movieData}
      />
      <Seating
        setSeats={setSeats}
        isSeats={isSeats}
        divs={divs}
        price={price}
        hc={handleClick}
      />
    </div>
  );
}
