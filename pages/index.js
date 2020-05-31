import React, { useContext, useEffect } from "react";
import Movie from "../components/movie";
import styles from "../styles/index.module.css";
import NavB from "../components/navB";
import { movArr, MovieClass } from "../lib/utils";
import { AlgoContext } from "../contexts/algoContext";

export default function Home() {
  const { algo, setAlgo } = useContext(AlgoContext);
  let fmovies = movArr;
  let objArr = [];
  fmovies.forEach((mo) => {
    let obj = new MovieClass(mo);
    objArr.push(obj);
  });
  let divs = fmovies
    ? fmovies.map((movie) => {
        return (
          <Movie
            id={movie.id}
            key={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            bd={movie.backdrop_path}
          />
        );
      })
    : [];
  useEffect(() => {
    if (!algo[0]) setAlgo(objArr);
  }, []);
  console.log(algo ? (algo[1] ? algo[1].views : "") : "");
  return (
    <>
      <NavB />
      <div className={styles.mgrid}>{divs}</div>
    </>
  );
}
